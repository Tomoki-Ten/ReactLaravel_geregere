import { createStore } from "redux";

export interface LoginStatus {
  login: number;
  user: {
    name: string;
  };
}

const initialState: LoginStatus = {
  login: 0,
  user: {
    name: "",
  },
};

interface ActionType {
  type: string;
  user: {
    name: string;
  };
}

const reducer = (
  state: LoginStatus = initialState,
  action: ActionType
): LoginStatus => {
  console.log("@state: ", state);
  console.log("@user: ", state.user);
  console.log("@action: ", action);
  switch (action.type) {
    case "AUTH":
      return {
        // ...state,
        login: 1,
        user: {
          name: action.user.name,
        },
      };
    case "UNAUTH":
      return {
        login: 0,
        user: {
          name: "NO USER",
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
