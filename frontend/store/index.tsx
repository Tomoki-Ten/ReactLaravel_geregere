import { combineReducers, createStore } from "redux";
import LoginStateReducer, { LoginStatus } from "./login";
import PostDataReducer, { PostData } from "./post";

export interface AppState {
  LoginState: LoginStatus;
  PostDataState: PostData;
}

const rootReducer = combineReducers({
  LoginState: LoginStateReducer,
  PostDataState: PostDataReducer,
});

const store = createStore(rootReducer);

export default store;
