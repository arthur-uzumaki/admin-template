import { createContext, ReactNode, useState } from "react";

export const AppContext = createContext<AppContextProps>({})
  
type Tema = 'dark' | ''

interface AppContextProps{
  tema?: Tema
  alternarTema?: () => void

}

interface AppProviderProps{
  children: ReactNode

}

export function AppProvider({children}:AppProviderProps){
  const [tema , setTema] = useState<Tema>('dark')
  function alternarTema (){
      setTema(tema === '' ? 'dark' : '')
  }
  return (
    <AppContext.Provider value={{
      tema,
      alternarTema

    }}>
      {children}
    </AppContext.Provider>
  )
}

