import { ReactNode } from 'react'
import NavBar from './NavBar'
import Aside from './Aside'

type MainContainerProps = {
  children: ReactNode
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <>
      <NavBar />
      <Aside />
      <div>{children}</div>
    </>
  )
}
