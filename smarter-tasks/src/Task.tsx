import React from "react";
import { UserIcon, CalendarIcon, TrashIcon } from "@heroicons/react/24/solid";
import { TaskItem } from "./types";
import { Link } from "react-router-dom";
export type TaskProps = {
  task: TaskItem;
  deleteTask: (taskID: number) => void;
};

const TaskFC: React.FC<TaskProps> = (props) => {
  const {
    task: { id, title, dueDate, completedAtDate, assigneeName, description },
    deleteTask,
  } = props;

  return (
    <li className="list-none TaskItem bg-gray-800 text-white p-4 rounded mt-3 mb-3 shadow shadow-black border-violet-500">
      <div className="flex flex-row justify-between">
        <div>
          <Link to={`/tasks/${id}`}>
            <h2 className="text-base font-bold">{title}</h2>
          </Link>
          <p className="font-sans">{description}</p>
        </div>

        <button onClick={() => deleteTask(id)}>
          <TrashIcon className="h-6 w-6 text-violet-600 inline mr-2 deleteTaskButton" />
        </button>
      </div>
      <div className="flex gap-3 mt-2 justify-between">
        {/* Date */}
        <div className="flex flex-wrap justify-center">
          <CalendarIcon className="h-6 w-6 text-violet-600 inline mr-2" />
          <div>
            {completedAtDate ? (
              <>
                <i>Completed on: </i>
                {new Date(completedAtDate).toLocaleDateString("en-IN")}
              </>
            ) : (
              <>
                <i>Due on:</i> {new Date(dueDate).toLocaleDateString("en-IN")}
              </>
            )}
          </div>
        </div>

        {/* Assignee */}
        <div className="flex flex-wrap justify-center">
          <UserIcon className="h-6 w-6 text-violet-600 inline mr-2" />
          <div>
            <i>Assignee: </i> {assigneeName}
          </div>
        </div>
      </div>
    </li>
  );
};
// const TaskCard: React.FC<Task> = (props) => {

//     return (
//         <div className="TaskItem min-w-">
//             <h2 className='text-xl font-bold'>{props.title}</h2>
//             {props.completedAtDate &&
//                 <p>Completed on: {props.completedAtDate.toLocaleDateString("en-IN")}</p>
//             }
//             {!props.completedAtDate && <p>Due on : {props.dueDate.toLocaleDateString("en-IN")}</p>}
//             <p>Assignee: {props.assigneeName}</p>
//         </div>
//     )
// }

export default TaskFC;
