import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import reducer from "./reducer";

const rootReducer = combineReducers({
  shops: shopReducer,
  products: reducer,
});
export default rootReducer;
