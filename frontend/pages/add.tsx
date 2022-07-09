import axios from "axios";
import AppTitle from "../components/AppTitle";
import LayoutAuth from "../components/layouts/LayoutAuth";

const login = () => {
  axios
    .get("http://localhost:8080/sanctum/csrf-cookie", { withCredentials: true })
    .then((response) => {
      console.log("sanctum: catch");
      console.log(response);
      axios
        // .get("http://localhost:8080/no_cre", { withCredentials: true })
        .post(
          "http://localhost:8080/login",
          {
            name: "geregere",
            password: "password",
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log("login: then");
          console.log(response);
        })
        .catch((response) => {
          console.log("login: catch");
          console.log(response);
        });
    })
    .catch((response) => {
      console.log("sanctum: catch");
      console.log(response);
    });
};

const test = () => {
  axios
    .get("http://localhost:8080/spa/auth_test", { withCredentials: true })
    .then((response) => {
      console.log("test");
      console.log(response);
    })
    .catch((response) => {
      console.log("test: catch");
      console.log(response);
    });
};

const handleClick = () => {
  login();
};

const handleClickTest = () => {
  test();
};

const Add = (): JSX.Element => {
  const page_title: string = "Add Page";
  return (
    <LayoutAuth>
      <AppTitle page_title={page_title} />
      <div>
        <form method="POST" action="">
          {/* USER */}
          <div>
            <label htmlFor="input_user">USER: </label>
            <input type="text" name="" id="input_user"></input>
          </div>
          {/* TITLE */}
          <div>
            <label htmlFor="input_title">TITLE: </label>
            <input type="text" name="" id="input_title"></input>
          </div>
          {/* TEXT */}
          <div>
            <label htmlFor="input_text">TEXT: </label>
            <input type="text" name="" id="input_text"></input>
          </div>
          {/* CHECK */}
          <div>
            <label htmlFor="input_check_01">
              CHECK-01:
              <input type="checkbox" name="check[]" id="input_check_01"></input>
            </label>
            <label htmlFor="input_check_02">
              CHECK-02:
              <input type="checkbox" name="check[]" id="input_check_02"></input>
            </label>
            <label htmlFor="input_check_03">
              CHECK-03:
              <input type="checkbox" name="check[]" id="input_check_03"></input>
            </label>
          </div>
          {/* BOOL */}
          <div>
            <label htmlFor="input_bool_true">
              TRUE:
              <input type="radio" name="bool" id="input_bool_true"></input>
            </label>
            <label htmlFor="input_bool_false">
              FALSE:
              <input type="radio" name="bool" id="input_bool_false"></input>
            </label>
          </div>
          <div>
            <button type="button" onClick={handleClick}>
              LOGIN
            </button>
            <button type="button" onClick={handleClickTest}>
              TEST
            </button>
          </div>
        </form>
      </div>
    </LayoutAuth>
  );
};

export default Add;
