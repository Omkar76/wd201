import { API_ENDPOINT } from "../../config/constants";
import { TaskListAvailableAction, TasksDispatch } from "../task/types";

import { ProjectsDispatch } from "./context";
export let fetchProjects = async (dispatch: ProjectsDispatch) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: "FETCH_PROJECTS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_PROJECTS_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching projects:", error);
    dispatch({
      type: "FETCH_PROJECTS_FAILURE",
      payload: "Unable to load projects",
    });
  }
};

export const addProject = async (dispatch: ProjectsDispatch, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error("Failed to create project");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    dispatch({ type: "ADD_PROJECT_SUCCESS", payload: data });
    return { ok: true };
  } catch (error) {
    console.error("Operation failed:", error);
    return { ok: false, error };
  }
};

export const refreshTasks = async (
  dispatch: TasksDispatch,
  projectID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: TaskListAvailableAction.FETCH_TASKS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response) {
      throw new Error("Failed to create project");
    }

    // extract the response body as JSON data
    const data = await response.json();

    dispatch({
      type: TaskListAvailableAction.FETCH_TASKS_SUCCESS,
      payload: data,
    });
    console.dir(data);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: TaskListAvailableAction.FETCH_TASKS_FAILURE,
      payload: "Unable to load tasks",
    });
  }
};
