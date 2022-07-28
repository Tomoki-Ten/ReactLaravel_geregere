import React, { useState, useEffect, useLayoutEffect } from "react";
// import type { NextPage } from "next";
import AppTitle from "../../../components/AppTitle";
import TBody from "../../../components/table/TBody";
import LayoutAuth from "../../../components/layouts/LayoutAuth";
import { cibSonos } from "@coreui/icons";

export interface Post {
  id: number;
  user: string;
  title: string;
  text: string;
  check: number;
  bool: boolean;
  created_at: string;
}

// const dummyPosts: Post[] = [
//   {
//     id: 0,
//     user: "Chuck",
//     title: "Eat a lot",
//     text: "text example",
//     check: 1,
//     bool: true,
//     created_at: "2022-02-11",
//   },
//   {
//     id: 1,
//     user: "UserName-00",
//     title: "Post Title 00",
//     text: "Text Exaple 00",
//     check: 1,
//     bool: true,
//     created_at: "2022-02-11",
//   },
//   {
//     id: 2,
//     user: "UserName-01",
//     title: "Post Title 01",
//     text: "Text Exaple 01",
//     check: 1,
//     bool: true,
//     created_at: "2022-02-11",
//   },
// ];

const Dashboard = (): JSX.Element => {
  const page_title: string = "Page: Dashboard";
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    console.log("@Effect: User");
    axios
      .get(Routes.POST, { withCredentials: true })
      .then((response) => {
        console.log("@get:then");
      })
      .catch((response) => {
        console.log("@get:catch");
      });
  });

  // Read
  const readThisPost = (post: Post) => {
    console.log("readThisPost");
    console.log(post);
  };
  // Delete
  const deletePost = (post_id: number) => {
    console.log("deletePost");
    let updated_posts: Post[] = posts.filter((exist_post) => {
      if (post_id != exist_post.id) {
        return exist_post;
      }
    });
    setPosts(updated_posts);
  };

  const clickEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("clickEvent: Parent: value: ", e.target.value);
  };

  return (
    <LayoutAuth>
      <AppTitle page_title={page_title} />
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
            deletePost={deletePost}
            readThisPost={readThisPost}
            clickEvent={clickEvent}
          />
        </table>
      </div>
    </LayoutAuth>
  );
};

export default Dashboard;
