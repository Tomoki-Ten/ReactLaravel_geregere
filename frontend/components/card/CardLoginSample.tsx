import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Box, Card, CardMedia, CardContent, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/router";
import Routes from "../../routes/routes";
import * as W_COMMON from "../../constant/word/common";
import * as W_ERROR from "../../constant/word/error";
import store from "../../store/index";

const CardLoginSample = (): JSX.Element => {
  // Router
  const router = useRouter();
  // Redux
  const dispatch = useDispatch();
  // const login = useSelector<LoginStatus>((state) => state.login);

  // useState
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  /**
   * Validation
   */
  const errorLoginIdExists: boolean = false;
  const errorPasswordExists: boolean = false;
  //
  const helperTextLoginId: string = errorLoginIdExists
    ? `${W_COMMON.LOGIN}${W_ERROR.REQUIRED}`
    : "";
  const helperTextPassword: string = errorPasswordExists
    ? `${W_COMMON.PASSWORD}${W_ERROR.REQUIRED}`
    : "";
  /**
   * Handles
   */
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    setLoading(true);
    axios
      .get(Routes.SANCTUM, { withCredentials: true })
      .then((response) => {
        axios
          .post(
            Routes.LOGIN,
            {
              name: userName,
              password: password,
            },
            { withCredentials: true }
          )
          .then((response) => {
            if (response.data.status === "login") {
              dispatch({
                type: "AUTH",
                user: { name: userName },
              });
              router.push(Routes.F_POST_DASHBOARD);
            }
          })
          .catch((response) => {
            // ERROR PROGRAM
            dispatch({ type: "UNAUTH" });
            setLoading(false);
          });
      })
      .catch((response) => {
        // ERROR PROGRAM
        dispatch({ type: "UNAUTH" });
        setLoading(false);
      });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="/img/nextjs_logo.png"
        alt="Sample Image"
      />
      <CardContent>
        <TextField
          error={errorLoginIdExists}
          helperText={helperTextLoginId}
          fullWidth
          id="loginId"
          label={`${W_COMMON.LOGIN_ID}`}
          variant="outlined"
          margin="dense"
          onChange={(e) => handleUserName(e)}
        />
        <TextField
          error={errorPasswordExists}
          helperText={helperTextPassword}
          fullWidth
          type="password"
          id="password"
          label={`${W_COMMON.PASSWORD}`}
          variant="outlined"
          margin="dense"
          onChange={(e) => handlePassword(e)}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <LoadingButton
            size="large"
            color="primary"
            onClick={() => handleLogin()}
            loading={loading}
            variant="outlined"
            fullWidth
          >
            {W_COMMON.LOGIN}
          </LoadingButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardLoginSample;
