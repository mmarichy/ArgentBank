import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/authSlice'

const rootReducer = {
  auth: authReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})
