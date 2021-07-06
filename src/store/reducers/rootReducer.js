import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import reducer from "./reducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  shops: shopReducer,
  products: reducer,
  user: authReducer,
});
export default rootReducer;
