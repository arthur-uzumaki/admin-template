
// v9 compat packages are API compatible with v8 code
import Cookies from "cookies-ts";
import 'firebase/auth';
import firebase from '../../firebase/config';

import Router from 'next/router';
import { createContext, ReactNode, useEffect, useState } from "react";
import { Usuario } from '../../model/Usuario';


const cookies = new Cookies()

interface AuthContextProps {
  usuario?: Usuario
  loginGoogle?: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({})

interface AuthProviderProps {
  children: ReactNode
}

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken()

  return {
    uid: usuarioFirebase.uid,
    email: usuarioFirebase.email,
    nome: usuarioFirebase.displayName,
    token,
    provedor: usuarioFirebase.providerData[0]!.providerId,
    imagemUrl: usuarioFirebase.photoURL
  }
}

function gerenciarCookie(logado: boolean) {
  if (logado) {


    cookies.set('adimn-templete-cod3r-atug', logado, {
      expires: 7,

    })

  } else {
    cookies.remove('adimn-templete-cod3r-atug')
  }
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [usuario, setUsuario] = useState<Usuario>()
  const [carregando, setCarregando] = useState(true)

  async function configurarSessao(usuarioFirebase: any) {

    if (usuarioFirebase.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase)
      setUsuario(usuario)

      gerenciarCookie(true)

      setCarregando(true)

      return usuario.email

    } else {

      setCarregando(false)
      gerenciarCookie(false)
      return false
    }
  }
  async function loginGoogle() {

    const response = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())

      configurarSessao(response.user)
      Router.push('/')
    

  }

  useEffect(() => {
     const cancelar =  firebase.auth().onIdTokenChanged(configurarSessao)
     return () => cancelar()

  }, [])

  return (
    <AuthContext.Provider value={{
      usuario,
      loginGoogle
    }}>
      {children}
    </AuthContext.Provider>
  )
}


