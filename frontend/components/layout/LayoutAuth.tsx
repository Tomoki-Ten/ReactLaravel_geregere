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
    return state.LoginState.login;
  });
  // const login = useSelector<LoginStatus>((state) => state.login);

  useEffect(() => {
    if (login === 0) {
      axios
        .get(Routes.AUTH_CONFIRM, { withCredentials: true })
        .then((res) => {
          // 認証、OK
          dispatch({
            type: "AUTH",
            user: { name: res.data.user.name },
          });
        })
        .catch((res) => {
          // 認証、失敗
          dispatch({ type: "UNAUTH" });
          router.replace(Routes.INDEX);
        });
    }
  }, []);

  if (login) {
    return (
      // <Box component="div" sx={{ height: "100%", width: "100%", pb: 1 }}>
      <Box component="div" sx={{ height: "100vh", width: "100%", pb: 1 }}>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Layout Title</title>
        </Head>
        <DrawerSet>{props.children}</DrawerSet>
      </Box>
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
