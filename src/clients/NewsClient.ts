import axios from 'axios'
import { ApiResponse, NewsEntity } from '@/entities/NewsEntity'

export const requestAllNews = async (): Promise<NewsEntity[]> => {
  const { data } = await axios.request<ApiResponse>({
    baseURL:
      'https://content.guardianapis.com/search?api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all',
    method: 'GET',
  })

  return data.response.results
}
