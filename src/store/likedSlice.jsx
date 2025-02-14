import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  likedList: []
};

export const LikedSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    saveLikedProducts: (state, action) => {
      if (action.payload.isLiked) {
        return {
          likedList: [...state.likedList, action.payload]
        }
      } else {
        const list = state.likedList.filter(item => item.id !== action.payload.id)
        return {
          likedList: list
        }
      }
    },
    deleteLikeProducts: (state, action) => {
      const list = state.likedList.filter(item => item.id !== action.payload.id)
      return {
        likedList: list
      }
    }
  }
})

export const { saveLikedProducts, deleteLikeProducts } = LikedSlice.actions
export default LikedSlice.reducer
