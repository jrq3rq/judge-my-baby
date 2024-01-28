import { configureStore } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  babyData: [],
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BABY_DATA":
      return {
        ...state,
        babyData: [...state.babyData, action.payload],
      };
    // Add other cases as needed
    default:
      return state;
  }
};

// Create store using configureStore
const store = configureStore({
  reducer: reducer,
});

export default store;
