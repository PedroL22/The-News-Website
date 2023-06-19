import type { AppProps } from 'next/app'

import { MainContainer } from '@/components/MainContainer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}
