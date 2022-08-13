import React from "react";
import LayoutUnauth from "../components/layout/LayoutUnauth";
import CardLoginSample from "../components/card/CardLoginSample";

const Login = (): JSX.Element => {
  return (
    <LayoutUnauth>
      <CardLoginSample />
    </LayoutUnauth>
  );
};

export default Login;
