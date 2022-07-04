import Head from "next/head";

interface Props {
  children: React.ReactNode;
}

const LayoutUnauth: React.VFC<Props> = (props): JSX.Element => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Layout Title</title>
      </Head>
      <main>{props.children}</main>
    </>
  );
};

export default LayoutUnauth;
