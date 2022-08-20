// Like Libraries
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Box, CircularProgress, Stack } from "@mui/material";
import axios from "axios";
// Developper
import DrawerSet from "../nav/DrawerSet";
import Routes from "../../routes/routes";
// Redux
import { LoginStatus } from "../../store/login";
import { AppState } from "../../store/index";

export interface Props {
  children: React.ReactNode;
}

const LayoutAuth = (props: Props): JSX.Element => {
  // Router
  const router = useRouter();
  // Redux
  const dispatch = useDispatch();
  const login = useSelector<LoginStatus>((state: AppState | any) => {
    console.log("@buhi");
    console.log(state);
    return state.LoginState.login;
  });
  // const login = useSelector<LoginStatus>((state) => state.login);

  useEffect(() => {
    if (login === 0) {
      axios
        .get(Routes.AUTH_CONFIRM, { withCredentials: true })
        .then((response) => {
          // 認証、OK
          console.log("@auth");
          dispatch({ user: { name: "Love" }, type: "AUTH" });
          // dispatch({ user: { name: "Love" } }, {type: "AUTH"});
        })
        .catch((response) => {
          console.log("@unAuth");
          // 認証、失敗
          dispatch({ type: "UNAUTH" });
          router.replace(Routes.INDEX);
        });
    }
  }, []);

  if (login) {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Layout Title</title>
        </Head>
        <DrawerSet>{props.children}</DrawerSet>
      </div>
    );
  } else {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
};

export default LayoutAuth;
