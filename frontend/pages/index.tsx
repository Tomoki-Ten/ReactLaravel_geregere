import React from "react";
import LayoutUnauth from "../components/layouts/LayoutUnauth";
import CardLoginSample from "../components/cards/sample_card";

const Login = (): JSX.Element => {
  return (
    <LayoutUnauth>
      <CardLoginSample />
    </LayoutUnauth>
  );
};

export default Login;
