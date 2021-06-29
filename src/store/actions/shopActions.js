import axios from "axios";
import * as actionTypes from "./types";

export const shopsFetch = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost8000/shops");
      console.log(res.data);
      dispatch({
        type: actionTypes.FETCH_SHOPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
