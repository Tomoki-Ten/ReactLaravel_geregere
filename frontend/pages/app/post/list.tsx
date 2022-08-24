import React, { useState, useEffect } from "react";
import axios from "axios";
import Routes from "../../../routes/routes";
import AppTitle from "../../../components/AppTitle";
import Original from "../../../components/table/original/Original";
import LayoutAuth from "../../../components/layout/LayoutAuth";
import TBody from "../../../components/table/TBody";

export interface Post {
  id: number;
  user: string;
  title: string;
  text: string;
  check: number;
  bool: boolean;
  created_at: string;
}

const dummyPosts: Post[] = [
  {
    id: 0,
    user: "Chuck",
    title: "Eat a lot",
    text: "text example",
    check: 1,
    bool: true,
    created_at: "2022-02-11",
  },
  {
    id: 1,
    user: "UserName-00",
    title: "Post Title 00",
    text: "Text Exaple 00",
    check: 1,
    bool: true,
    created_at: "2022-02-11",
  },
];

const List = (): JSX.Element => {
  const pageTitle: string = "Post List";
  const [posts, setPosts] = useState<Post[]>(dummyPosts);

  useEffect(() => {
    axios
      .get(Routes.POST_LIST, { withCredentials: true })
      .then((res) => {
        console.log("@then: ", res);
      })
      .catch((res) => {
        console.log("@catch: ", res);
      });
  }, []);

  // const deletePost = () => {};
  const readThisPost = () => {};
  const clickEvent = () => {};

  return (
    <LayoutAuth>
      <AppTitle page_title={pageTitle} />
      {/* TODO: BreadCrumb */}
      <Original />
    </LayoutAuth>
  );
};

export default List;
