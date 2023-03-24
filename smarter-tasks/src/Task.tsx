import React from "react";
import { UserIcon, CalendarIcon } from "@heroicons/react/24/solid";
export interface Task {
  title: string;
  dueDate: Date;
  completedAtDate?: Date;
  assigneeName: string;
  description?: string;
}

interface TaskState {}

class TaskCard extends React.Component<Task, TaskState> {
  constructor(props: Task) {
    super(props);
  }

  render() {
    const { title, dueDate, completedAtDate, assigneeName, description } =
      this.props;

    return (
      <div className="TaskItem bg-gray-800 text-white p-2 rounded m-1 border-2 border-violet-500">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="font-sans">{description}</p>

        <div className="flex gap-3 mt-2 justify-between">
          {/* Date */}
          <div className="flex flex-wrap justify-center">
            <CalendarIcon className="h-6 w-6 text-violet-600 inline mr-2" />
            <div>
              {completedAtDate ? (
                <>
                  <i>Completed on:</i>{" "}
                  {completedAtDate.toLocaleDateString("en-IN")}
                </>
              ) : (
                <>
                  <i>Due on:</i> {dueDate.toLocaleDateString("en-IN")}
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
      </div>
    );
  }
}
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

export default TaskCard;
