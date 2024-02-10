import { createSlice, nanoid } from "@reduxjs/toolkit";

export const babyDataSlice = createSlice({
  name: "babyData",
  initialState: {
    babies: [],
  },
  reducers: {
    addBabyData: {
      reducer: (state, action) => {
        state.babies.push(action.payload);
      },
      prepare: (data) => ({
        payload: {
          ...data,
          id: nanoid(), // Automatically generate a unique ID for each baby
          rating: 0, // Initialize with a default rating
        },
      }),
    },
    updateRating: (state, action) => {
      const { id, rating } = action.payload;
      const baby = state.babies.find((baby) => baby.id === id);
      if (baby) {
        baby.rating = rating;
      }
    },
    deleteBaby: (state, action) => {
      state.babies = state.babies.filter((baby) => baby.id !== action.payload);
    },
  },
});

export const { addBabyData, updateRating, deleteBaby } = babyDataSlice.actions;

export default babyDataSlice.reducer;
