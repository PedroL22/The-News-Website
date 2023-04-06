export type NewsEntity = {
  id: string
  webUrl: string
  sectionName: string
  webTitle?: string
  blocks?: {
    main?: {
      elements: {
        assets: {
          file: string
        }[]
      }[]
    }
    body?: {
      bodyTextSummary: string
    }[]
  }
  webPublicationDate: string
}

export type ApiResponse = {
  response: {
    results: NewsEntity[]
  }
}
