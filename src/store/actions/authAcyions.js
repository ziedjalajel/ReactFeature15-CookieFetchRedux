import instance from "./instance";
import decode from "jwt-decode";

import * as actionTypes from "./types";

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);

      dispatch(setUser(res.data.token));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
export const signOut = () => {
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) return setUser(token);
  }
  return setUser();
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};
