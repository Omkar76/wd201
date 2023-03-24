import React from "react";
import { useState } from "react";
import DateUtil from "./DateUtil";
import TaskCard, { Task } from "./Task";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProp {}
interface TaskAppState {
  tasks: Task[];
}

class App extends React.Component<TaskAppProp, TaskAppState> {
  constructor(props: TaskAppProp) {
    super(props);
    this.state = {
      tasks: [
        {
          title: "Build the website with static content",
          dueDate: DateUtil.tommorrow,
          assigneeName: "Kekeh",
        },
        {
          title: "Add a blog",
          dueDate: DateUtil.today,
          assigneeName: "Kekeh",
        },
      ],
    };  
  }

  addTask = (value: string) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { title: value, dueDate: DateUtil.today, assigneeName: "Anon" },
      ],
    });
  };
  render() {
    return (
      <>
      <h1 className="text-white text-3xl border-b border-b-violet-500 p-4 font-bold bg-black">YetAnotherTodoList</h1>

      <div className="mt-5 m-auto max-w-lg p-4">
        <TaskForm addTask={this.addTask} />
        <hr className="mt-4 mb-4" />
        <TaskList tasks={this.state.tasks}/>
      </div></>
    );
  }
}

export default App;
