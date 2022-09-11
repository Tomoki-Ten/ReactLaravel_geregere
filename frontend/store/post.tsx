export interface PostData {
  id: number;
  title: string;
  text: string;
  comments: CommentType[];
}

export interface CommentType {
  comment_id: number;
  comment_text: string;
  comment_title: string;
}

export const initialPostStatus: PostData = {
  id: 0,
  title: "",
  text: "",
  comments: [],
};

interface ActionType {
  type: string;
  postData: PostData;
}

const PostDataReducer = (
  state: PostData = initialPostStatus,
  action: ActionType
): PostData | {} => {
  console.log("@PostDataReducer_state", state);
  console.log("@action: ", action);
  switch (action.type) {
    case "KEEP":
      return {
        id: action.postData.id,
        title: action.postData.title,
        text: action.postData.text,
        comments: action.postData.comments,
      };
    case "RESET":
      return initialPostStatus;
    // return {
    //   id: 0,
    //   title: "",
    //   text: "",
    //   comments: [],
    // };
    default:
      return state;
  }
};

export default PostDataReducer;
