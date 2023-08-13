import { API_ENDPOINT } from "../../config/constants";
import { refreshTasks } from "../projects/actions";
import { CommentsDispatch } from "./context";

export let fetchComments = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: "FETCH_COMMENTS_REQUEST" });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching projects:", error);
    dispatch({
      type: "FETCH_COMMENTS_FAILURE",
      payload: "Unable to load members",
    });
  }
};

interface Comment {
  description: string;
}

export const addComment = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string,
  comment: Comment
) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create member");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    // dispatch({ type: 'ADD_COMMENT_SUCCESS'});
    fetchComments(dispatch, projectID, taskID);
    return { ok: true };
  } catch (error) {
    console.error("Operation failed:", error);
    return { ok: false, error };
  }
};

// export const deleteComment = async (dispatch: CommentsDispatch, id: number) => {
//   try {
//     const token = localStorage.getItem("authToken") ?? "";
//     const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
//     });
//     if (!response.ok) {
//       throw new Error('Failed to create member');
//     }
//     const data = await response.json();
//     if (data.errors && data.errors.length > 0) {
//       return { ok: false, error: data.errors[0].message }
//     }

//     dispatch({ type: 'DELETE_COMMENT_SUCCESS', payload: id });
//     return { ok: true }
//   } catch (error) {
//     console.error('Operation failed:', error);
//     return { ok: false, error }
//   }
// };
