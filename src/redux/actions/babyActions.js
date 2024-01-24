// Action types
export const ADD_BABY = "ADD_BABY";
export const UPDATE_SCORE = "UPDATE_SCORE";

// Action creators
export const addBaby = (baby) => ({
  type: ADD_BABY,
  payload: baby,
});

export const updateScore = (id, newScore) => ({
  type: UPDATE_SCORE,
  payload: { id, newScore },
});
