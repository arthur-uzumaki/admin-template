import type { AppProps } from 'next/app'

import { AppProvider } from '../data/contex/AppContext'
import { AuthProvider } from '../data/contex/AuthContex'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>

  </AuthProvider>
  )
}
