import axios from "axios";

export const addSignup = (newSignup) => {
  return async (dispatch) => {
    try {
      // don't need formdata in signup
      //   const userData = new FormData();
      //   for (const key in newSignup) userData.append(key, newSignup[key]);
      console.log(newSignup);
      const res = await axios.post("http://localhost:8000/signup", newSignup);
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchSignup = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/signup");
    } catch (error) {
      console.log(error);
    }
  };
};
