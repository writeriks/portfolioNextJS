import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Modal {
  LOGIN = 'LOGIN',
}

export enum ViewportComponents {
  INTRO = 'INTRO',
  PORTFOLIO = 'PORTFOLIO',
  TESTIMONIALS = 'TESTIMONIALS',
  WORKS = 'WORKS',
  CONTACT = 'CONTACT',
}

export interface UIState {
  isLoading: boolean
  modal: Modal | null
  viewportComponent: ViewportComponents
}

export const initialState: UIState = {
  isLoading: false,
  modal: null,
  viewportComponent: ViewportComponents.INTRO,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },

    setViewportComponent: (state, action: PayloadAction<ViewportComponents>) => {
      state.viewportComponent = action.payload
    },

    openLoginModal: (state) => {
      state.modal = Modal.LOGIN
    },

    closeModal: (state) => {
      state.modal = null
    },
  },
})

export const { setIsLoading, openLoginModal, closeModal } = uiSlice.actions

export default uiSlice.reducer
