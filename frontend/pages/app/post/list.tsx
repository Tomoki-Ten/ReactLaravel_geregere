import React, { useState, useEffect } from "react";

import AppTitle from "../../../components/AppTitle";
import LayoutAuth from "../../../components/layouts/LayoutAuth";
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
  {
    id: 2,
    user: "UserName-01",
    title: "Post Title 01",
    text: "Text Exaple 01",
    check: 1,
    bool: true,
    created_at: "2022-02-11",
  },
];

const List = (): JSX.Element => {
  const pageTitle: string = "Post List";
  const [posts, setPosts] = useState<Post[]>(dummyPosts);

  // const deletePost = () => {};

  const readThisPost = () => {};

  const clickEvent = () => {};

  return (
    <LayoutAuth>
      <AppTitle page_title={pageTitle} />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">USER NAME</th>
              <th scope="col">TITLE</th>
              <th scope="col">TEXT</th>
              <th scope="col">CHECK</th>
              <th scope="col">BOOL</th>
              <th scope="col">CREATED_AT</th>
              <th scope="col">CONTROLER</th>
            </tr>
          </thead>
          <TBody
            posts={posts}
            deletePost={undefined}
            readThisPost={readThisPost}
            clickEvent={clickEvent}
          />
        </table>
      </div>
    </LayoutAuth>
  );
};

export default List;
