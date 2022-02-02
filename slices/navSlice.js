import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload
    }
  }
})


export const { setOrigin, setDestionation, setTrvelTimeInformation } = navSlice.actions

export const selectOrigin = (state) => state.navSlice.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer
