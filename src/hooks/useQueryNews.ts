import { useQuery } from '@tanstack/react-query'

import { NewsEntity } from '@/entities/NewsEntity'

import { requestAllNews } from '@/clients/NewsClient'

export const useFetchAllNews = (searchValue: string, pageNumber: number) => {
  return useQuery<NewsEntity[]>(['ALL-NEWS', searchValue, pageNumber], () =>
    requestAllNews(searchValue, pageNumber)
  )
}
