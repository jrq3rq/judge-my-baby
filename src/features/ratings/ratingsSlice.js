// features/ratings/ratingsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const ratingsSlice = createSlice({
  name: "ratings",
  initialState: {
    ratings: {}, // This will hold ratings with baby IDs as keys
  },
  reducers: {
    setRating: (state, action) => {
      const { babyId, rating } = action.payload;
      state.ratings[babyId] = rating;
    },
  },
});

export const { setRating } = ratingsSlice.actions;

export default ratingsSlice.reducer;
