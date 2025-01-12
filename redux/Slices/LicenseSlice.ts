import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  showLicense: false
}

const LicenseSlice = createSlice({
  name: "licenseSlice",
  initialState,
  reducers: {
    setLicense: (state, action) => {
      state.showLicense = action.payload
    }
  }
})

export const { setLicense } = LicenseSlice.actions

export default LicenseSlice.reducer
