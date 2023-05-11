import React from "react";
import TaskCard, { TaskItem } from "./Task";

interface TaskListProps {
  tasks: TaskItem[];
  deleteTask : (taskID : number) => void
}

// interface TaskListState {}

const TaskList: React.FC<TaskListProps> = ({tasks, deleteTask}) =>{
    const taskElements = tasks.map((task: TaskItem) => {
      return <TaskCard key={task.id}  
                       task={task} 
                       deleteTask={deleteTask} />;
    });

    return <ul>{
      taskElements
    }</ul>;
}

export default TaskList;
