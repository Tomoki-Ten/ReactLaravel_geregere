import { combineReducers, createStore } from "redux";
import LoginStateReducer, { LoginStatus } from "./login";

export interface AppState {
  LoginState: LoginStatus;
}

const rootReducer = combineReducers({
  LoginState: LoginStateReducer,
});

const store = createStore(rootReducer);

export default store;
