import { useState } from 'react'
import { useFetchAllNews } from '@/hooks/useQueryNews'

export default function Home() {
  const [searchValue, setSearchValue] = useState('')

  const { data, isLoading } = useFetchAllNews(searchValue)

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
        <p>Loading...</p>
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
          <div
            key={news.id}
            className='m-5 xl:flex'
          >
            <a
              href={news.webUrl}
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={news.blocks?.main?.elements[0].assets[0]?.file}
                alt='news image'
                className='w-96 h-56 object-cover mr-5 cursor-pointer'
              />
            </a>
            <div className='block'>
              <p className='font-medium mt-2 xl:mt-0'>{news.sectionName}</p>
              <a
                href={news.webUrl}
                target='_blank'
                rel='noreferrer'
              >
                <h1 className='xl:w-80 text-2xl text-red-700 font-bold cursor-pointer'>
                  {news.webTitle?.substring(0, 75)}
                </h1>
              </a>

              <p className='xl:w-96'>
                {news.blocks?.body?.[0]?.bodyTextSummary.substring(0, 150)}...
              </p>
              <p className='text-sm text-gray-600 mb-5 xl:mb-0'>
                {news.webPublicationDate}
              </p>
            </div>
          </div>
        ))}
      <div className='flex ml-5'>
        <button
          className='bg-gray-300 p-4 mr-2 mb-5 hover:bg-gray-400 ease-in transition-all duration-75'
          //onClick={newsOne}
        >
          1
        </button>
        <button
          className='bg-gray-300 p-4 mr-2 mb-5 hover:bg-gray-400 ease-in transition-all duration-75'
          //onClick={newsTwo}
        >
          2
        </button>
        <button
          className='bg-gray-300 p-4 mr-2 mb-5 hover:bg-gray-400 ease-in transition-all duration-75'
          //onClick={newsThree}
        >
          3
        </button>
        <button
          className='bg-gray-300 p-4 mr-2 mb-5 hover:bg-gray-400 ease-in transition-all duration-75'
          //onClick={newsFour}
        >
          4
        </button>
        <button
          className='bg-gray-300 p-4 mr-2 mb-5 hover:bg-gray-400 ease-in transition-all duration-75'
          //onClick={newsFive}
        >
          5
        </button>
      </div>
    </div>
  )
}
