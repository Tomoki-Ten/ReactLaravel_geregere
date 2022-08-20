import { combineReducers, createStore } from "redux";
import LoginStateReducer from "./login";

const rootReducer = combineReducers({
  LoginStateReducer,
  // loginState: LoginStateReducer,
});

const store = createStore(rootReducer);

export default store;
