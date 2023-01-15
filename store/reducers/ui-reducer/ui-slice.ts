import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Modal {
  LOGIN = 'LOGIN',
}

export enum ViewportComponents {
  INTRO = 'INTRO',
  ABOUT = 'ABOUT',
  TESTIMONIALS = 'TESTIMONIALS',
  WORKS = 'WORKS',
  CONTACT = 'CONTACT',
}

export interface UIState {
  isLoading: boolean
  modal: Modal | null
  viewportComponent: ViewportComponents
  isHamburgerMenuOpen: boolean
  isTechListShown: boolean
}

export const initialState: UIState = {
  isLoading: false,
  modal: null,
  isHamburgerMenuOpen: false,
  isTechListShown: false,
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

    setIsTechListShown: (state, action: PayloadAction<boolean>) => {
      state.isTechListShown = action.payload
    },

    toggleHamburgerMenu: (state) => {
      state.isHamburgerMenuOpen = !state.isHamburgerMenuOpen
    },
  },
})

export const {
  setIsLoading,
  openLoginModal,
  closeModal,
  setIsTechListShown,
  setViewportComponent,
  toggleHamburgerMenu,
} = uiSlice.actions

export default uiSlice.reducer
