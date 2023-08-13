import { useState } from "react";
import { addComment } from "../../context/comment/actions";
import { useCommentsDispatch } from "../../context/comment/context";
import CommentList from "./CommentList";
import { useParams } from "react-router-dom";

export function CommentSection() {
  const [commentText, setCommentText] = useState("");
  const commentDispatch = useCommentsDispatch();
  const { projectID, taskID } = useParams();

  return (
    <>
      <form
        className="flex flex-col my-2 gap-2"
        onSubmit={(e) => {
          e.preventDefault();

          if (!commentText.trim()) {
            return;
          }

          addComment(commentDispatch, projectID!, taskID!, {
            description: commentText,
          });

          setCommentText("");
        }}
      >
        <input
          className="flex-1 p-2  outline-transparent border-2"
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
        />
        <button
          id="addCommentButton"
          className="ml-auto bg-blue-600 text-white p-2 rounded-md"
        >
          Post Comment
        </button>
      </form>
      <CommentList projectID={projectID} taskID={taskID} />
    </>
  );
}
