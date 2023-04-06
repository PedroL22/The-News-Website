import { usePageNumber } from '@/stores/pageStore'
import { useSearchValue } from '@/stores/searchStore'
import Link from 'next/link'

export const NavBar = () => {
  const { resetSearchValue } = useSearchValue()
  const { resetPageNumber } = usePageNumber()

  return (
    <nav className='fixed h-16 bg-red-700 mb-10 w-screen'>
      <div className='flex mx-auto max-w-7xl justify-between p-5 w-screen'>
        <Link
          href='/'
          onClick={() => {
            resetSearchValue()
            resetPageNumber()
          }}
        >
          <h1 className='text-white font-medium cursor-pointer hover:text-gray-200 transition-all ease-in duration-75'>
            The News Website
          </h1>
        </Link>
      </div>
    </nav>
  )
}
