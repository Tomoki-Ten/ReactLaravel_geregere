import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import type { LoginStatus } from "../../store/index";
import Head from "next/head";
// import Header from "./Header";
import Sidebar from "../navs/Sidebar";
import Routes from "../../routes/routes";

interface Props {
  children: React.ReactNode;
}

const LayoutAuth = (props: Props): JSX.Element => {
  const header_contents: string = "Applicaton Header";
  const router = useRouter();
  /* Redux */
  const dispatch = useDispatch();
  const login = useSelector<LoginStatus>((state) => state.login);

  useEffect(() => {
    if (!login) {
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
        {/* <header>
          <Header contents={header_contents} />
        </header> */}
        <main className="d-flex w-100">
          <Sidebar />
          {props.children}
        </main>
      </div>
    );
  } else {
    // TODO: Add Loading Spinner As Preloader
    return <></>;
  }
};

export default LayoutAuth;
