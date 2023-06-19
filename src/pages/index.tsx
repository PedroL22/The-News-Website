import { useFetchAllNews } from '@/hooks/useQueryNews'
import { useSearchValue } from '@/stores/searchStore'
import { usePageNumber } from '@/stores/pageStore'

import { NewsCard } from '@/components/NewsCard'

export default function Home() {
  const { searchValue, setSearchValue } = useSearchValue()
  const { pageNumber, setPageNumber } = usePageNumber()

  const { data, isLoading } = useFetchAllNews(searchValue, pageNumber)

  if (isLoading) {
    return (
      <div className='mx-auto max-w-7xl'>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className='ml-5 mt-20 w-[90vw] rounded-xl bg-gray-200 p-3 outline-1 outline-red-300 focus:bg-white xl:w-96'
        />
        <div className='h-screen'>
          <img
            src='/loading-buffering.gif'
            alt='loading'
            className='mx-auto flex w-24 pt-[25vh]'
          />
        </div>
      </div>
    )
  }

  if (data?.length == 0) {
    return (
      <div className='mx-auto max-w-7xl'>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className='ml-5 mt-20 w-[90vw] rounded-xl bg-gray-200 p-3 outline-1 outline-red-300 focus:bg-white xl:w-96'
        />
        <div className='flex h-screen justify-center'>
          <p className='w-24 pt-[25vh] text-lg'>No results</p>
        </div>
      </div>
    )
  }

  return (
    <div className='mx-auto max-w-7xl'>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className='ml-5 mt-20 w-[90vw] rounded-xl bg-gray-200 p-3 outline-1 outline-red-300 focus:bg-white xl:w-96'
      />
      {data &&
        data.map((news) => (
          <NewsCard
            news={news}
            key={news.id}
          />
        ))}
      <div className='flex justify-center'>
        <div>
          {[1, 2, 3, 4, 5].map((number) => (
            <button
              key={number}
              className={`${
                pageNumber === number
                  ? 'bg-gray-400 hover:bg-gray-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              } mb-5 mr-2 p-4 transition-all duration-75 ease-in`}
              onClick={() => setPageNumber(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
