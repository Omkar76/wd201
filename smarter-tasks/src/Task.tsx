import React from "react";

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
        <p>{description}</p>
        {completedAtDate && (
          <p>Completed on: {completedAtDate.toLocaleDateString("en-IN")}</p>
        )}
        {!completedAtDate && (
          <p>Due on : {dueDate.toLocaleDateString("en-IN")}</p>
        )}
        <p>Assignee: {assigneeName}</p>
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
