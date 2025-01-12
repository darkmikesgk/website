import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  showPrivacy: false
}

const PrivacySlice = createSlice({
  name: "privacySlice",
  initialState,
  reducers: {
    setPrivacy: (state, action) => {
      state.showPrivacy = action.payload
    }
  }
})

export const { setPrivacy } = PrivacySlice.actions

export default PrivacySlice.reducer
