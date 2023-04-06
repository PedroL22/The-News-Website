import { ReactNode } from 'react'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavBar } from './NavBar'
import { Aside } from './Aside'

type MainContainerProps = {
  children: ReactNode
}

export const MainContainer = ({ children }: MainContainerProps) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Aside />
      <Head>
        <title>The News Website</title>
        <meta
          name='description'
          content="A news website made with The Guardian API, Next JS, and Tailwind CSS based on Globo's G1."
        />
        <link
          rel='icon'
          href='/favicon.png'
        />
      </Head>
      <div>{children}</div>
    </QueryClientProvider>
  )
}
