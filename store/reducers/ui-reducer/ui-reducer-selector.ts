import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../redux-store'
import { UIState } from './ui-slice'

class UiReducerSelector {
  getUiReducer = (state: RootState): UIState => state.ui

  getIsLoading = createSelector(this.getUiReducer, (ui) => ui.isLoading)

  getIsTechListShown = createSelector(this.getUiReducer, (ui) => ui.isTechListShown)

  getModal = createSelector(this.getUiReducer, (ui) => ui.modal)

  getViewportComponent = createSelector(this.getUiReducer, (ui) => ui.viewportComponent)

  getIsHamburgerMenuOpen = createSelector(this.getUiReducer, (ui) => ui.isHamburgerMenuOpen)
}

const uiReducerSelector = new UiReducerSelector()
export default uiReducerSelector
