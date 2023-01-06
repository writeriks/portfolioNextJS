import { configureStore } from '@reduxjs/toolkit'
import contextSlice from './reducers/context-reducer/context-slice'
import errorSlice from './reducers/error-reducer/error-slice'
import uiSlice from './reducers/ui-reducer/ui-slice'

const reducer = {
  ui: uiSlice,
  context: contextSlice,
  error: errorSlice,
}

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV != 'production',
})

export type RootState = ReturnType<typeof store.getState>

export default store
