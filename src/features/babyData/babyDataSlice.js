// import { createSlice } from "@reduxjs/toolkit";

// export const babyDataSlice = createSlice({
//   name: "babyData",
//   initialState: {
//     babies: [],
//   },
//   reducers: {
//     addBabyData: (state, action) => {
//       state.babies.push(action.payload);
//     },

//   },
// });

// export const { addBabyData } = babyDataSlice.actions;
// export default babyDataSlice.reducer;

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
      prepare: (data) => {
        const id = nanoid(); // Generate a unique ID for each submission
        return { payload: { id, ...data } };
      },
    },
  },
});

export const { addBabyData } = babyDataSlice.actions;

export default babyDataSlice.reducer;
