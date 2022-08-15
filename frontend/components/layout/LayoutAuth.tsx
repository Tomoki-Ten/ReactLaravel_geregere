// Like Libraries
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import type { LoginStatus } from "../../store/index";
import { Box, CircularProgress, Stack } from "@mui/material";
import axios from "axios";
// Developper
import DrawerSet from "../nav/DrawerSet";
import Routes from "../../routes/routes";

// import store from "../../store/index";

export interface Props {
  children: React.ReactNode;
}

const LayoutAuth = (props: Props): JSX.Element => {
  // const header_contents: string = "Applicaton Header";
  const router = useRouter();
  /* Redux */
  const dispatch = useDispatch();
  const login = useSelector<LoginStatus>((state) => state.login);

  useEffect(() => {
    if (login === 0) {
      console.log("@in");
      axios
        .get(Routes.AUTH_CONFIRM, { withCredentials: true })
        .then((response) => {
          // 認証、OK
          dispatch({ type: "AUTH" });
        })
        .catch((response) => {
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
