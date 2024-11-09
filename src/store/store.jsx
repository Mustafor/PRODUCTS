import { configureStore } from "@reduxjs/toolkit"
import { LikedSlice } from './likedSlice'

export const store = configureStore({
  reducer: LikedSlice.reducer
})
