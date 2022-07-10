import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const LayoutUnauth = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Layout Title</title>
      </Head>
      <main>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 15,
          }}
        >
          {children}
        </Box>
      </main>
    </>
  );
};

export default LayoutUnauth;
