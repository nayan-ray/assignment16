import { configureStore } from '@reduxjs/toolkit'
import  signUpSliceReducer  from '../features/signUp/signUpSlice'

export const store = configureStore({
  reducer: {
    signup: signUpSliceReducer
  },
})