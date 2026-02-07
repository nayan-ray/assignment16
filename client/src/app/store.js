import { configureStore } from '@reduxjs/toolkit'
import  signUpSliceReducer  from '../features/signUp/signUpSlice'
import loaderReducer from "../features/loader/loaderSlice"
import loginReducer from "../features/login/loginSlice"
import dashboardReducer from "../features/dashboard/dashboardSlice"

export const store = configureStore({
  reducer: {
    signup: signUpSliceReducer,
    loader : loaderReducer,
    login : loginReducer,
    dashboard : dashboardReducer
  },
})