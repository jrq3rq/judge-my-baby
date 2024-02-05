import { configureStore } from "@reduxjs/toolkit";
import babyDataReducer from "../features/babyData/babyDataSlice";

const store = configureStore({
  reducer: {
    babyData: babyDataReducer,
  },
});

export default store; // Change to default export
