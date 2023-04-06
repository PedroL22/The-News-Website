import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Home() {
  const [theNews, setTheNews] = useState([
    'https://content.guardianapis.com/search?api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all',
  ])
  const [query, setQuery] = useState()

  const showData = useEffect(() => {
    const fetchData = () => {
      axios.get(theNews).then((res) => {
        setTheNews(res.data.response.results)
      })
    }
    fetchData()
  })

  const newsOne = () => {
    setTheNews([
      'https://content.guardianapis.com/search?api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all&page=1',
    ])
  }

  const newsTwo = () => {
    setTheNews([
      'https://content.guardianapis.com/search?api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all&page=2',
    ])
  }

  const newsThree = () => {
    setTheNews([
      'https://content.guardianapis.com/search?api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all&page=3',
    ])
  }

  const newsFour = () => {
    setTheNews([
      'https://content.guardianapis.com/search?api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all&page=4',
    ])
  }

  const newsFive = () => {
    setTheNews([
      'https://content.guardianapis.com/search?api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all&page=5',
    ])
  }

  const search = () => {
    setTheNews([
      `https://content.guardianapis.com/search?q=${query}&api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all`,
    ])
  }

  return (
    <div className=''>
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
      <div className='mx-auto max-w-7xl'>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          className='ml-5 mt-20 bg-gray-200 p-3 xl:w-96 w-[90vw] rounded-xl outline-1 outline-red-300 focus:bg-white'
        />
        {theNews.map((news) => (
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
                {news.blocks?.body[0]?.bodyTextSummary.substring(0, 150)}...
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
            onClick={newsOne}
          >
            1
          </button>
          <button
            className='bg-gray-300 p-4 mr-2 mb-5 hover:bg-gray-400 ease-in transition-all duration-75'
            onClick={newsTwo}
          >
            2
          </button>
          <button
            className='bg-gray-300 p-4 mr-2 mb-5 hover:bg-gray-400 ease-in transition-all duration-75'
            onClick={newsThree}
          >
            3
          </button>
          <button
            className='bg-gray-300 p-4 mr-2 mb-5 hover:bg-gray-400 ease-in transition-all duration-75'
            onClick={newsFour}
          >
            4
          </button>
          <button
            className='bg-gray-300 p-4 mr-2 mb-5 hover:bg-gray-400 ease-in transition-all duration-75'
            onClick={newsFive}
          >
            5
          </button>
        </div>
      </div>
    </div>
  )
}
