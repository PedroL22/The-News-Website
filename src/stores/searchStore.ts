import { create } from 'zustand'

type SearchType = {
  searchValue: string
  setSearchValue: (value: string) => void
  resetSearchValue: () => void
}

export const useSearchValue = create<SearchType>((set) => ({
  searchValue: '',

  setSearchValue: (value: string) =>
    set(() => ({
      searchValue: value,
    })),

  resetSearchValue: () =>
    set(() => ({
      searchValue: '',
    })),
}))
