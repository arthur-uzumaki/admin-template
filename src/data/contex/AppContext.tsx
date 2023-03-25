import { createContext, ReactNode, useEffect, useState } from "react";

export const AppContext = createContext<AppContextProps>({})
  
 //type Tema = 'dark' | ''

interface AppContextProps{
  tema?: string 
  alternarTema?: () => void

}

interface AppProviderProps{
  children: ReactNode

}

export function AppProvider({children}:AppProviderProps){
  const [tema , setTema] = useState('dark')
  function alternarTema (){
    const novoTema = tema === '' ? 'dark' :''
      setTema(tema === '' ? 'dark' : '')
      setTema(novoTema)
      localStorage.setItem('tema', novoTema)
  }

  useEffect(() =>{
   const temaSalvo = localStorage.getItem('tema')
    setTema(`${temaSalvo}`)
  }, [])

  return (
    <AppContext.Provider value={{
      tema,
      alternarTema

    }}>
      {children}
    </AppContext.Provider>
  )
}

