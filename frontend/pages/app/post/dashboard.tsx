import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import Routes from "../../../routes/routes";
import AppTitle from "../../../components/AppTitle";
import LayoutAuth from "../../../components/layout/LayoutAuth";
import DataGridTable from "../../../components/table/DataGridTable";

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
  // useState
  const [posts, setPosts] = useState<Post[]>([]);
  // useEffect
  useEffect(() => {
    axios
      .get(Routes.POST_LIST, { withCredentials: true })
      .then((res) => {
        // console.log("@get:then", res);
        setPosts(res.data);
      })
      .catch((res) => {
        console.log("@get:catch", res);
      });
  }, []);

  return (
    <LayoutAuth>
      <div className="w-100" style={{ height: "100vh", overflow: "scroll" }}>
        <AppTitle page_title={page_title} />
        {/* TODO: Search Form */}
        <DataGridTable posts={posts} />
      </div>
    </LayoutAuth>
  );
};

export default Dashboard;
