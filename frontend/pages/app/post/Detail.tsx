import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import store, { AppState } from "../../../store/index";
import { PostData, CommentType, initialPostStatus } from "../../../store/post";
import {
  Box,
  Paper,
  Divider,
  Typography,
  Stack,
  IconButton,
  Avatar,
} from "@mui/material";
import Routes from "../../../routes/routes";
import AppTitle from "../../../components/AppTitle";
import LayoutAuth from "../../../components/layout/LayoutAuth";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Detail = (): JSX.Element => {
  const pageTitle = "Detail Page";
  // Router
  const router = useRouter();

  const postData: PostData = useSelector<PostData>((state: AppState) => {
    return state.PostDataState;
  });
  // ControlButtons
  const controlButtonsObj = [
    {
      type: "edit",
      display: true,
      bgcolor: "#76ff03",
    },
    {
      type: "delete",
      display: true,
      bgcolor: "#ff9800",
    },
  ];
  const switchIcon = (type: string) => {
    switch (type) {
      case "edit":
        return <EditIcon />;
      case "delete":
        return <DeleteOutlineOutlinedIcon />;
    }
  };

  const textStyle = {
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    px: 2,
  };

  return (
    <LayoutAuth>
      <Box sx={{ height: "100%" }}>
        {/* <AppTitle page_title={pageTitle} /> */}
        {/* Post */}
        <Paper elevation={3} sx={{ p: 1, mb: 1 }}>
          <Box component="div">
            <Box
              component="div"
              display="flex"
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant="h5" sx={{ p: 1, fontWeight: "bold" }}>
                POST:
              </Typography>
              {/* ControlButton */}
              {postData.id !== 0 && (
                <Stack direction="row">
                  {controlButtonsObj.map((obj) => {
                    console.log("@obj: ", obj);
                    return (
                      <IconButton aria-label={obj.type} key={obj.type}>
                        <Avatar sx={{ bgcolor: obj.bgcolor }}>
                          {switchIcon(obj.type)}
                        </Avatar>
                      </IconButton>
                    );
                  })}
                </Stack>
              )}
            </Box>
            {postData.id === 0 ? (
              <Typography component="div" variant="h4" textAlign="center">
                No Post
              </Typography>
            ) : (
              <Box component="div" sx={{ px: 2 }}>
                <Box component="div">
                  <Typography component="div" variant="h6">
                    Title:
                  </Typography>
                  <Typography component="div" sx={{ px: 2 }}>
                    {postData.title}
                  </Typography>
                </Box>
                <Box component="div">
                  <Typography component="div" variant="h6">
                    Text:
                  </Typography>
                  <Typography component="div" sx={textStyle}>
                    {postData.text}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Paper>
        {/* Comments */}
        <Paper elevation={3} sx={{ p: 1 }}>
          <Box component="div">
            <Box component="div">
              <Typography variant="h5" sx={{ fontWeight: "bold", my: 1 }}>
                Comments:
              </Typography>
            </Box>
            {postData.comments.length === 0 ? (
              <Typography component="div" variant="h4" textAlign="center">
                No Comment
              </Typography>
            ) : (
              postData.comments.map((each: CommentType) => {
                return (
                  <>
                    <Divider component="div" />
                    <Box
                      component="div"
                      key={each.comment_id}
                      sx={{ px: 2, my: 2 }}
                    >
                      <Box component="div">
                        <Typography component="div" variant="h6">
                          Title:
                        </Typography>
                        <Typography component="div" sx={{ px: 2 }}>
                          {each.comment_title}
                        </Typography>
                      </Box>
                      <Box component="div">
                        <Typography component="div" variant="h6">
                          Text:
                        </Typography>
                        <Typography component="div" sx={textStyle}>
                          {each.comment_text}
                        </Typography>
                      </Box>
                    </Box>
                  </>
                );
              })
            )}
          </Box>
        </Paper>
      </Box>
    </LayoutAuth>
  );
};

export default Detail;
