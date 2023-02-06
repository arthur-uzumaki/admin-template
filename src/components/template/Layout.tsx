import { ReactNode } from "react"
import { useAppData } from "../../data/hook/useAppData"
import { ForcarAutenticacao } from "../auth/ForcarAutenticacao"
import { Cabecalho } from "../cabecalho/Cabecalho"
import { Conteudo } from "../conteudo/Conteudo"
import { MenuLateral } from "../menuLateral/MenuLateral"

interface LayoutProps{
  titulo: string
  subtitulo: string
  children?: ReactNode
}

export function Layout({titulo,subtitulo,children}:LayoutProps){
  const {tema} = useAppData()
  return(
    <ForcarAutenticacao >
         <div className={` ${tema} text-black h-screen w-screen flex`}>
        <MenuLateral/>
       <div className="flex flex-col w-full p-7 bg-zinc-200 dark:bg-zinc-800">
       <Cabecalho titulo={titulo} subtitulo={subtitulo}/>
        <Conteudo>
          {children}
        </Conteudo>
       </div>
    </div>
    </ForcarAutenticacao>
   
  )
}