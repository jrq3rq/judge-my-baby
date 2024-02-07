// import { createSlice, nanoid } from "@reduxjs/toolkit";

// export const babyDataSlice = createSlice({
//   name: "babyData",
//   initialState: {
//     babies: [],
//   },
//   reducers: {
//     addBabyData: {
//       reducer: (state, action) => {
//         state.babies.push(action.payload);
//       },
//       prepare: (data) => {
//         const id = nanoid(); // Generate a unique ID for each submission
//         return { payload: { id, ...data } };
//       },
//     },
//   },
// });

// export const { addBabyData } = babyDataSlice.actions;

// export default babyDataSlice.reducer;

// features/babyData/babyDataSlice.js
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
    // Assuming you have a reducer to update the rating
    updateRating: (state, action) => {
      const { id, rating } = action.payload;
      const baby = state.babies.find((baby) => baby.id === id);
      if (baby) {
        baby.rating = rating;
      }
    },
  },
});

export const { addBabyData, updateRating } = babyDataSlice.actions;
export default babyDataSlice.reducer;
