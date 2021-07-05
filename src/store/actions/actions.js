import axios from "axios";

import * as actionTypes from "./types";

// ACTIONS
export const addProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);
      const res = await axios.post(
        `http://localhost:8000/shops/${newProduct.shopId}/products`,
        formData
      );
      dispatch({
        type: actionTypes.ADD_PRODUCT,
        payload: { newProduct: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      dispatch({
        type: actionTypes.DELETE_PRODUCT,
        payload: { productId: productId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (updatedProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);
      const res = await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        formData
      );
      dispatch({
        type: actionTypes.UPDATE_PRODUCT,
        payload: { updatedProduct: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      console.log(res.data);
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
