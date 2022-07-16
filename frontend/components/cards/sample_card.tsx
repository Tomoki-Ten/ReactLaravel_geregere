import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import Routes from "../../routes/routes";
import * as COMMON_W from "../../constant/word/common";
import * as ERROR_W from "../../constant/word/error";

const CardLoginSample = (): JSX.Element => {
  // Router
  const router = useRouter();
  // useState
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  /**
   * Validation
   */
  const errorLoginIdExists: boolean = false;
  const errorPasswordExists: boolean = false;
  //
  const helperTextLoginId: string = errorLoginIdExists
    ? `${COMMON_W.LOGIN}${ERROR_W.REQUIRED}`
    : "";
  const helperTextPassword: string = errorPasswordExists
    ? `${COMMON_W.PASSWORD}${ERROR_W.REQUIRED}`
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
    axios
      .get(Routes.SANCTUM, { withCredentials: true })
      .then((response) => {
        console.log(response);
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
            console.log(response);
            if (response.data.status == "login") {
              console.log("login");
              router.push(Routes.DASHBOARD);
            }
          })
          .catch((response) => {
            console.log(response);
          });
      })
      .catch((response) => {
        console.log(response);
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
          label={`${COMMON_W.LOGIN_ID}`}
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
          label={`${COMMON_W.PASSWORD}`}
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
          <Button
            fullWidth
            size="large"
            variant="outlined"
            color="primary"
            onClick={() => {
              handleLogin();
            }}
          >
            {COMMON_W.LOGIN}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardLoginSample;
