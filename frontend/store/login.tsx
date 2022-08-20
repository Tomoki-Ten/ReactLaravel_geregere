export interface LoginStatus {
  // loginState?: any;
  login: number;
  user: {
    name: string;
  };
}

const initialState: LoginStatus = {
  login: 0,
  user: {
    name: "Initial User Name",
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

export default LoginStateReducer;
