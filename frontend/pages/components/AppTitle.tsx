interface Props {
  page_title: string;
}

const AppTitle = (props: Props): JSX.Element => {
  const {page_title} = props;
  return (
    <h2 className="p-3">{page_title}</h2>
  );
};

export default AppTitle;
