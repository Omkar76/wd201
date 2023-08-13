import React, { forwardRef } from "react";

import { TaskDetails } from "../../context/task/types";
import "./TaskCard.css";
import { Link, useParams } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Draggable } from "react-beautiful-dnd";
import { deleteTask } from "../../context/task/actions";
import { useTasksDispatch } from "../../context/task/context";

const Task = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ task: TaskDetails }>
>((props, ref) => {
  const { task } = props;
  const taskDispatch = useTasksDispatch();
  const { projectID } = useParams();
  return (
    <div ref={ref} {...props} className="m-2 flex">
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
            <p className="text-sm text-slate-500">
              Assignee: {task.assignedUserName ?? "-"}
            </p>
          </div>

          <button
            className="deleteTaskButton cursor-pointer h-4 w-4 rounded-full my-5 mr-5"
            onClick={(event) => {
              event.preventDefault();
              deleteTask(taskDispatch, projectID ?? "", task);
            }}
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </Link>
    </div>
  );
});

const Container = (
  props: React.PropsWithChildren<{
    task: TaskDetails;
    index: number;
  }>
) => {
  return (
    <Draggable index={props.index} draggableId={`${props.task.id}`}>
      {(provided) => (
        <Task
          task={props.task}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
      )}
    </Draggable>
  );
};

export default Container;
