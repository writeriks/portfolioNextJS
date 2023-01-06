import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ContextState {
  isMobile: boolean
  searchText: string
}

export enum selectedCategory {
  LIVE = 'live',
  MOVIE = 'movie',
  SERIES = 'series',
}

export const initialState: ContextState = {
  searchText: '',
  isMobile: false,
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
  },
})

export const { setIsMobile, setSearchText } = contextSlice.actions

export default contextSlice.reducer
