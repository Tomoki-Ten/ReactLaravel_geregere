// import { createStore } from "redux";

export interface LoginStatus {
  // loginState?: any;
  LoginStateReducer: {
    login: number;
    user: {
      name: string;
    };
  };
}

const initialState: LoginStatus = {
  LoginStateReducer: {
    login: 0,
    user: {
      name: "",
    },
  },
};

interface ActionType {
  type: string;
  user: {
    name: string;
  };
}

const LoginStateReducer = (
  state: LoginStatus = initialState,
  action: ActionType
): LoginStatus => {
  console.log("@state: ", state);
  console.log("@action: ", action);
  switch (action.type) {
    case "AUTH":
      return {
        // ...state,
        LoginStateReducer: {
          login: 1,
          user: {
            name: action.user.name ? action.user.name : "",
          },
        },
      };
    case "UNAUTH":
      return {
        LoginStateReducer: {
          login: 0,
          user: {
            name: "NO USER",
          },
        },
      };
    default:
      return state;
  }
};

export default LoginStateReducer;
