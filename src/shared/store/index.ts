import { configureStore } from "@reduxjs/toolkit"

import { licenseReducer } from "@/entities/license"
import { mobileHeaderReducer } from "@/entities/mobile-header"
import { privacyReducer } from "@/entities/privacy"
import { questionReducer } from "@/entities/question"
import { themeReducer } from "@/entities/theme"

const store = configureStore({
  reducer: {
    mobileHeader: mobileHeaderReducer,
    blackTheme: themeReducer,
    privacySlice: privacyReducer,
    licenseSlice: licenseReducer,
    questionSlice: questionReducer
  }
})

export default store
export { default as StoreProvider } from './StoreProvider'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
