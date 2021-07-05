import * as actionTypes from "../actions/types";

const initialState = {
  products: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case actionTypes.UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };
    case actionTypes.ADD_PRODUCT:
      const { newProduct } = action.payload;
      return {
        ...state,
        products: [...state.products, newProduct],
      };
    default:
      return state;
  }
};

export default reducer;
