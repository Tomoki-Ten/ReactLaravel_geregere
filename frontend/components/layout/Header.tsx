interface Props {
  contents: string;
}

const Header = (props: Props): JSX.Element => {
  const {contents} = props;
  return (
    <div>
      <h1>{contents}</h1>
    </div>
  );
};

export default Header;
