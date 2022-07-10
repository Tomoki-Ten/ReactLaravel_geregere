import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
// Material UI
import Button from "@mui/material/Button";

import LayoutUnauth from "../components/layouts/LayoutUnauth";
import Routes from "../routes/routes";
import AppTitle from "../components/AppTitle";
import ButtonSample from "../components/buttons/sample_button";
import CardLoginSample from "../components/cards/sample_card";

const Login = (): JSX.Element => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  // ページのタイトル
  const page_title: string = String(process.env.NEXT_PUBLIC_APP_TITLE);

  const lb_user_name: string = "User Name: ";
  const lb_password: string = "Password: ";
  const inp_type_text: string = "text";
  const inp_type_password: string = "password";

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Login
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
    <LayoutUnauth>
      <CardLoginSample />
    </LayoutUnauth>
  );
};

export default Login;
