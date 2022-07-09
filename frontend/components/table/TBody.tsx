import React from "react";
import type { Post } from "../../pages/app/user/dashboard";
import { CButton } from "@coreui/react";

interface Props {
  posts: Post[];
  deletePost: any; // For Function
  readThisPost: any;
  clickEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 
 * @param props 
 * @returns 
 */
const TBody = (props: Props): JSX.Element => {
  const {
    posts,
    deletePost = undefined,
    readThisPost,
    clickEvent,
  } = props;

  const text: string = "test_text";
  // Text
  const clickText = (text: string) => {
    console.log("clickText");
    console.log(text);
  };
  // Read
  const clickRead = (post: any) => {
    console.log("clickRead");
    readThisPost(post);
  };
  // Delete
  const clickDelete = (post_id?: number) => {
    console.log("clickDelete");
    if (deletePost != undefined) {
      deletePost(post_id);
    }
  };
  // Event
  const clickEventChild = (e: any) => {
    console.log("clickEventChild");
    clickEvent(e);
    // console.log(e.target.value);
  };

  return (
    <tbody>
      {posts.map((post: Post) => {
        let key = "post_" + post.id;
        return (
          <tr key={key}>
            <th scope="row">{post.id}</th>
            <td>{post.user}</td>
            <td>{post.title}</td>
            <td>{post.text}</td>
            <td>{post.check}</td>
            <td>{post.bool}</td>
            <td>{post.created_at}</td>
            <td>
              <CButton
                color="primary"
                type="button"
                shape="rounded-pill"
                onClick={() => clickRead({ post })}
              >
                Detail
              </CButton>
              <CButton
                color="success"
                type="button"
                shape="rounded-pill"
                className="text-white"
                onClick={() => console.log("@edit: clicked")}
              >
                Edit
              </CButton>
              <CButton
                color="danger"
                type="button"
                shape="rounded-pill"
                className="text-white"
                onClick={() => clickDelete()}
              >
                Delete
              </CButton>
              <CButton
                color="warning"
                type="button"
                shape="rounded-pill"
                className="text-white"
                onClick={() => clickEventChild(event)}
              >
                Event
              </CButton>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TBody;
