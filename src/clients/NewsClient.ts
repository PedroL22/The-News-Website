import axios from 'axios'
import { ApiResponse, NewsEntity } from '@/entities/NewsEntity'

export const requestAllNews = async (
  searchValue: string,
  pageNumber: number
): Promise<NewsEntity[]> => {
  const { data } = await axios.request<ApiResponse>({
    baseURL: `https://content.guardianapis.com/search?q=${searchValue}&api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all&page=${pageNumber}`,
    method: 'GET',
  })

  return data.response.results
}
