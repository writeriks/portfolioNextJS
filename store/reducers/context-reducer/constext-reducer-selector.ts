import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../redux-store'
import { ContextState } from './context-slice'

class ContextReducerSelector {
  getContextReducer = (state: RootState): ContextState => state.context

  getIsMobile = createSelector(this.getContextReducer, (context) => context.isMobile)

  getSearchText = createSelector(this.getContextReducer, (context) => context.searchText)

  getIsMailSent = createSelector(this.getContextReducer, (context) => context.isMailSent)
}

const contextReducerSelector = new ContextReducerSelector()
export default contextReducerSelector
