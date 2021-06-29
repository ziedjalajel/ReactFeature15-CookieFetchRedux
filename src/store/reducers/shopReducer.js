import * as actionTypes from "../actions/types";

const initialState = {
  shops: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload,
      };
    case actionTypes.ADD_SHOPS:
      const { newShop } = action.payload;
      return {
        ...state,
        shops: [...state.shops, newShop],
      };
    default:
      return state;
  }
};

export default shopReducer;
