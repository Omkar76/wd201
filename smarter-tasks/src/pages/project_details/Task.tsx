import React from "react";

import { TaskDetails } from "../../context/task/types";
import "./TaskCard.css";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

const Task: React.FC<React.PropsWithChildren<{ task: TaskDetails }>> = (
  props
) => {
  const { task } = props;
  return (
    <div className="m-2 flex">
      <Link
        className="TaskItem w-full shadow-md border border-slate-100 bg-white"
        to={`tasks/${task.id}`}
      >
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div>
            <h2 className="text-base font-bold my-1">{task.title}</h2>
            <p className="text-sm text-slate-500">
              {new Date(task.dueDate).toDateString()}
            </p>
            <p className="text-sm text-slate-500">
              Description: {task.description}
            </p>
          </div>
          <button
            className="deleteTaskButton cursor-pointer h-4 w-4 rounded-full my-5 mr-5"
            onClick={(event) => {}}
          >
            <TrashIcon className="w-5 h-5"/>
          </button>
        </div>
      </Link>
    </div>
  );
};

const Container = (
  props: React.PropsWithChildren<{
    task: TaskDetails;
  }>
) => {
  return <Task task={props.task} />;
};

export default Container;