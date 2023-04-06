import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainContainer from '@/components/MainContainer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}
