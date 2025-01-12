import { configureStore } from "@reduxjs/toolkit"
import mobileHeaderReducer from "./Slices/mobileHeaderSlice"
import blackThemeSlice from "./Slices/ThemeSlice"
import privacySlice from "./Slices/PrivacySlice"
import licenseSlice from "./Slices/LicenseSlice"
import questionReducer from "@/redux/Slices/QuestionSlice"

const store = configureStore({
  reducer: {
    mobileHeader: mobileHeaderReducer,
    blackTheme: blackThemeSlice,
    privacySlice: privacySlice,
    licenseSlice: licenseSlice,
    questionSlice: questionReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
