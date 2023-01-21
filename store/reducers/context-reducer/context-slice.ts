import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ContextState {
  isMobile: boolean
  searchText: string
  isMailSent: boolean | null
}

export enum selectedCategory {
  LIVE = 'live',
  MOVIE = 'movie',
  SERIES = 'series',
}

export const initialState: ContextState = {
  searchText: '',
  isMobile: false,
  isMailSent: null,
}

const contextSlice = createSlice({
  name: 'context',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
    setIsMailSent: (state, action: PayloadAction<boolean>) => {
      state.isMailSent = action.payload
    },
  },
})

export const { setIsMobile, setSearchText, setIsMailSent } = contextSlice.actions

export default contextSlice.reducer
