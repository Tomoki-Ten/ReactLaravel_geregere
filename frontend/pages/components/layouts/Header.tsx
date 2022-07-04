// import Nav from "../navs/Nav";

interface Props {
  contents: string;
}

const Header: React.VFC<Props> = (props) => {
  return (
    <div>
      <h1>{props.contents}</h1>
      {/* <Nav /> */}
    </div>
  );
};

export default Header;
