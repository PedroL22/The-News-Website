import { create } from 'zustand'

type PageType = {
  pageNumber: number
  setPageNumber: (value: number) => void
  resetPageNumber: () => void
}

export const usePageNumber = create<PageType>((set) => ({
  pageNumber: 1,

  setPageNumber: (value: number) =>
    set(() => ({
      pageNumber: value,
    })),

  resetPageNumber: () =>
    set(() => ({
      pageNumber: 1,
    })),
}))
