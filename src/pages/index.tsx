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
          className='ml-5 mt-20 bg-gray-200 p-3 xl:w-96 w-[90vw] rounded-xl outline-1 outline-red-300 focus:bg-white'
        />
        <div className='h-screen'>
          <img
            src='/loading-buffering.gif'
            alt='loading'
            className='flex mx-auto w-24 pt-[25vh]'
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
          className='ml-5 mt-20 bg-gray-200 p-3 xl:w-96 w-[90vw] rounded-xl outline-1 outline-red-300 focus:bg-white'
        />
        <div className='flex justify-center h-screen'>
          <p className='text-lg w-24 pt-[25vh]'>No results</p>
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
        className='ml-5 mt-20 bg-gray-200 p-3 xl:w-96 w-[90vw] rounded-xl outline-1 outline-red-300 focus:bg-white'
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
              } p-4 mr-2 mb-5 ease-in transition-all duration-75`}
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
