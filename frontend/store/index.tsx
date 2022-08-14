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
  console.log("@state: ", state);
  console.log("@action: ", action);
  switch (action.type) {
    case "AUTH":
      console.log("@redux_auth");
      return {
        login: 1,
      };
    case "UNAUTH":
      console.log("@redux_unauth");
      return {
        login: 0,
      };
    default:
      console.log("@redux_default");
      return state;
  }
};

const store = createStore(reducer);

export default store;
