import Image from "next/image"
import Router from "next/router"
import { ReactNode } from "react"
import loading from '../../../public/image/loading.gif'
import { useAuth } from "../../data/hook/useAuth"

interface ForcarAutenticacaoProps {
  children: ReactNode
}

export function ForcarAutenticacao({ children }: ForcarAutenticacaoProps) {
  
  const { usuario, carregando } = useAuth()
  function renderizarConteudo() {

    return (
      <div>
        
        {children}
      
      </div>
    )
  }

  function renderizarCarregando() {
    return (

      <div className="flex justify-center items-center h-screen">
        <Image src={loading} alt='loading' />

      </div>
    )
  }


  if(carregando && usuario?.email){
   
    return renderizarConteudo()
  }else if(carregando){
    return renderizarCarregando()
  }else{
    Router.push('/autenticacao')
    return null
  }
 
}
