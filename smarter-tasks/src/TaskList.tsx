import React from "react";
import TaskCard, { Task } from "./Task";

interface TaskListProps {
  tasks: Task[];
}

interface TaskListState {}
class TaskList extends React.Component<TaskListProps, TaskListState> {
  render() {
    return this.props.tasks.map((task: Task) => <TaskCard {...task} />);
  }
}

export default TaskList;
