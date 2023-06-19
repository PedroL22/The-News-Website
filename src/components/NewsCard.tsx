import React from 'react'

import { NewsEntity } from '@/entities/NewsEntity'

type NewsCardProps = {
  news: NewsEntity
}

export const NewsCard = ({ news }: NewsCardProps) => {
  return (
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
          src={
            news.blocks?.main?.elements[0].assets[0]?.file ??
            'https://markhamrealty.com/wp-content/uploads/2023/01/no-image.jpg'
          }
          alt=''
          className='mr-5 h-56 w-96 cursor-pointer object-cover'
        />
      </a>
      <div className='block'>
        <p className='mt-2 font-medium xl:mt-0'>{news.sectionName}</p>
        <a
          href={news.webUrl}
          target='_blank'
          rel='noreferrer'
        >
          <h1 className='cursor-pointer text-2xl font-bold text-red-700 xl:w-80'>
            {news.webTitle?.substring(0, 75)}
          </h1>
        </a>

        <p className='xl:w-96'>
          {news.blocks?.body?.[0]?.bodyTextSummary.substring(0, 150)}...
        </p>
        <p className='mb-5 text-sm text-gray-600 xl:mb-0'>
          {new Date(news.webPublicationDate).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>
      </div>
    </div>
  )
}
