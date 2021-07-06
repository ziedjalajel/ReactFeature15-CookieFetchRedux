import axios from "axios";
import instance from "./instance";

export const addSignup = (newSignup, history) => {
  return async (dispatch) => {
    try {
      // don't need formdata in signup
      //   const userData = new FormData();
      //   for (const key in newSignup) userData.append(key, newSignup[key]);
      console.log(newSignup);
      const res = await instance.post("/signup", newSignup);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchSignup = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/signup");
    } catch (error) {
      console.log(error);
    }
  };
};
