import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  unitDetails: [],
}
export const unitDetailsSlice = createSlice({
  name: 'unitDetail',
  initialState,
  reducers: {
    setUnitDetails: (state, action) => {
        state.unitDetails = action.payload;
    },
    clearUnitDetails : (state) => {
        state.unitDetails = []
    }
 }
  
    
  
})

// Action creators are generated for each case reducer function
export const { setUnitDetails , clearUnitDetails} = unitDetailsSlice.actions

export default unitDetailsSlice.reducer