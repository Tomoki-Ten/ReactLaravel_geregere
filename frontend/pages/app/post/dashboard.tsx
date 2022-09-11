import React, { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Box } from "@mui/material";
import Routes from "../../../routes/routes";
import AppTitle from "../../../components/AppTitle";
import LayoutAuth from "../../../components/layout/LayoutAuth";
import SearchForm from "../../../components/form/SearchForm";
import DataGridTable from "../../../components/table/DataGridTable";
import { InputWithLabelProps } from "../../../components/form/InputWithLabel";

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
    axios
      .get(Routes.POST_LIST, { withCredentials: true })
      .then((res) => {
        console.log("@res", res);
        setPosts(res.data.posts);
      })
      .catch((res) => {
        console.log("@get:catch", res);
        router.replace(Routes.INDEX);
      });
  }, []);

  const cols: InputWithLabelProps[] = [
    {
      type: "text",
      name: "title",
      value: "",
      key: "title",
    },
    {
      type: "text",
      name: "text",
      value: "",
      key: "text",
    },
  ];

  return (
    <LayoutAuth>
      <Box component="div" sx={{ height: "100%", pt: 5, mt: 3 }}>
        <AppTitle page_title={page_title} />
        <SearchForm cols={cols} setPosts={setPosts} />
        <DataGridTable posts={posts} />
      </Box>
    </LayoutAuth>
  );
};

export default Dashboard;
