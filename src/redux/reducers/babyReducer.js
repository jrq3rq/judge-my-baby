// babyReducer.js
import { ADD_BABY, UPDATE_SCORE } from "../actions/babyActions";

const initialState = {
  babyData: [],
};

const babyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BABY:
      return { ...state, babyData: [...state.babyData, action.payload] };
    case UPDATE_SCORE:
      // Logic to update score
      return state; // Update this line with proper logic
    default:
      return state;
  }
};

export default babyReducer;
