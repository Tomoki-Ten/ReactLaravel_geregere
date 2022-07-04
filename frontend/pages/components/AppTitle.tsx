interface Props {
  page_title: string;
}

const AppTitle: React.VFC<Props> = ({ page_title }) => {
  return <h2 className="p-3">{page_title}</h2>;
};

export default AppTitle;
