import { createStore } from "redux";

export interface LoginStatus {
  login: number;
}

const initialState: LoginStatus = {
  login: 0,
};

interface ActionType {
  type: string;
}

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "AUTH":
      return {
        login: 1,
      };
    case "UNAUTH":
      return {
        login: 0,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
