import {useCommentsDispatch, useCommentsState} from "../../context/comments/context";
import { CommentsState } from "../../context/comments/reducer";
import { useMembersState } from "../../context/members/context";
export default function CommentListItems() {

  const state: CommentsState = useCommentsState();
  const memberState = useMembersState();
  const { comments, isLoading, isError, errorMessage } = state

  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  function getUserName(id : number){
    const member = memberState?.members?.find(member => member.id == id);
    return member?.name;
  }

  return (
    <>
      {comments.map((comment: any) => (
        <div key={comment.id} className="comment p-2 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="">
              <p className="font-medium tracking-tight text-gray-900 dark:text-white">~ {getUserName(comment.owner)}</p>
              <p>{comment.description}</p>
              <p>{new Date(comment.createdAt).toLocaleString("en-IN")}</p>
          </div>
        </div>
      ))}
    </>
  );  
}