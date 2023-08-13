import React, { useEffect } from "react";
import {
  useCommentsDispatch,
  useCommentsState,
} from "../../context/comment/context";
import { fetchComments } from "../../context/comment/actions";
import CommentListItems from "./CommentListItems";

interface CommentListProps {
  projectID: string | undefined;
  taskID: string | undefined;
}

const CommentList: React.FC<CommentListProps> = ({ projectID, taskID }) => {
  const dispatchComments = useCommentsDispatch();
  const state = useCommentsState();
  useEffect(() => {
    fetchComments(dispatchComments, projectID!, taskID!);
  }, [dispatchComments, projectID, taskID]);

  if (!state) {
    return <>something went wrong</>;
  }
  return (
    <div>
      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col gap-2">
          <CommentListItems />
        </div>
      )}
    </div>
  );
};
export default CommentList;
