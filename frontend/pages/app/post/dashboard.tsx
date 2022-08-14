import React, { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Routes from "../../../routes/routes";
// import type { NextPage } from "next";
// Developer
import AppTitle from "../../../components/AppTitle";
// import TBody from "../../../components/table/TBody";
import LayoutAuth from "../../../components/layout/LayoutAuth";
import DataGridTable from "../../../components/table/DataGridTable";
// import Sidebar from "../../../components/navs/Sidebar";

export interface Post {
  id: number;
  user: string;
  title: string;
  text: string;
  check: number;
  bool: boolean;
  created_at: string;
}

const Dashboard = (): JSX.Element => {
  const page_title: string = "Page: Dashboard";
  // Router
  const router = useRouter();
  // useState
  const [posts, setPosts] = useState<Post[]>([]);
  // useEffect
  useEffect(() => {
    // console.log("@Effect");
    axios
      .get(Routes.POST_LIST, { withCredentials: true })
      .then((response) => {
        // console.log("@get:then");
        // console.log(response);
        setPosts(response.data);
      })
      .catch((response) => {
        // console.log("@get:catch");
        // console.log(response);
      });
  }, []);

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
      <div className="w-100" style={{ height: "100vh", overflow: "scroll" }}>
        <AppTitle page_title={page_title} />
        <DataGridTable posts={posts} />
      </div>
    </LayoutAuth>
  );
};

export default Dashboard;
