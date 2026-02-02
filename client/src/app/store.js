import { configureStore } from '@reduxjs/toolkit'
import  signUpSliceReducer  from '../features/signUp/signUpSlice'
import loaderReducer from "../features/loader/loaderSlice"

export const store = configureStore({
  reducer: {
    signup: signUpSliceReducer,
    loader : loaderReducer
  },
})