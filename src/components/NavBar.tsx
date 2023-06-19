import Link from 'next/link'
import { usePageNumber } from '@/stores/pageStore'
import { useSearchValue } from '@/stores/searchStore'

export const NavBar = () => {
  const { resetSearchValue } = useSearchValue()
  const { resetPageNumber } = usePageNumber()

  return (
    <nav className='fixed mb-10 h-16 w-screen bg-red-700'>
      <div className='mx-auto flex w-screen max-w-7xl justify-between p-5'>
        <Link
          href='/'
          onClick={() => {
            resetSearchValue()
            resetPageNumber()
          }}
        >
          <h1 className='cursor-pointer font-medium text-white transition-all duration-75 ease-in hover:text-gray-200'>
            The News Website
          </h1>
        </Link>
      </div>
    </nav>
  )
}
