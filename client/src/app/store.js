import { configureStore } from '@reduxjs/toolkit'
import  signUpSliceReducer  from '../features/signUp/signUpSlice'
import loaderReducer from "../features/loader/loaderSlice"
import loginReducer from "../features/login/loginSlice"
import dashboardReducer from "../features/dashboard/dashboardSlice"
import unitReducer from "../features/unit/unitSlice"
import unitDetailsReducer from '../features/unitDetails/unitDetailSlice'
import noteReducer from "../features/note/noteSlice"

export const store = configureStore({
  reducer: {
    signup: signUpSliceReducer,
    loader : loaderReducer,
    login : loginReducer,
    dashboard : dashboardReducer,
    unit : unitReducer,
    unitDetail : unitDetailsReducer,
    note : noteReducer
  },
})