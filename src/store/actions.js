// ACTION TYPES
const CREATE_COOKIE = "CREATE_COOKIE";
const DELETE_COOKIE = "DELETE_COOKIE";

export const createCookie = (newCookie) => {
  return {
    type: CREATE_COOKIE,
    payload: { newCookie },
  };
};

export const deleteCookie = (cookieId) => {
  return {
    type: DELETE_COOKIE,
    payload: { cookieId },
  };
};
