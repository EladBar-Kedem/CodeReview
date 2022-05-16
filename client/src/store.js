import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/globalState'

export const store = configureStore({
  reducer: {
    data: counterReducer,
  },
})