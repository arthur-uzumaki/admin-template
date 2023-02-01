import { ReactNode } from "react"


interface ConteudoProps{
  children?: ReactNode
}

export function Conteudo({children}:ConteudoProps){

  return(

    <div className="flex flex-col mt-8 dark:text-zinc-100">
      {children}
    </div>
  )
}