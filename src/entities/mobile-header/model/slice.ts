import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  showLinks: false
}

const mobileHeaderSlice = createSlice({
  name: "mobileHeader",
  initialState,
  reducers: {
    toggleHeader: (state) => {
      state.showLinks = !state.showLinks
    }
  }
})

export const { toggleHeader } = mobileHeaderSlice.actions

export default mobileHeaderSlice.reducer
