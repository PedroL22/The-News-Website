import { useQuery } from '@tanstack/react-query'

import { NewsEntity } from '@/entities/NewsEntity'

import { requestAllNews } from '@/clients/NewsClient'

export const useFetchAllNews = (searchValue: string) => {
  return useQuery<NewsEntity[]>(['ALL-NEWS', searchValue], () =>
    requestAllNews(searchValue)
  )
}
