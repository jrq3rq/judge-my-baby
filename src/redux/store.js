import { configureStore } from "@reduxjs/toolkit";
import babyDataReducer from "../features/babyData/babyDataSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    babyData: babyDataReducer,
    user: userReducer,
  },
});

export default store;
