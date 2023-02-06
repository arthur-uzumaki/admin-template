
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
  carregando?: boolean
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
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

    if (usuarioFirebase?.email) {
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

    try{
      setCarregando(true)
      const response = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())

      configurarSessao(response.user)
      Router.push('/')
    }finally{
      setCarregando(false)
    }
    

  }

  async function logout(){

    try{
      setCarregando(true)
      await firebase.auth().signOut()
      await configurarSessao(null)

    }finally{
      setCarregando(false)
    }

  }

  useEffect(() => {
    if(cookies.get('adimn-templete-cod3r-atug')){
      const cancelar =  firebase.auth().onIdTokenChanged(configurarSessao)
      return () => cancelar()
      
    }else{
      setCarregando(false)
    }

  }, [])

  return (
    <AuthContext.Provider value={{
      usuario,
      carregando,
      loginGoogle,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}


