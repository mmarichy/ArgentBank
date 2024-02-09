import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/authSlice'
import { userReducer } from './auth/userSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})
