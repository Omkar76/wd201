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
          description: "Build a static website and deploy it on netlify",
          dueDate: DateUtil.tommorrow,
          assigneeName: "Kekeh",
        },
        {
          title: "Add a blog",
          description: "Share ideas with a blog",
          dueDate: DateUtil.today,
          assigneeName: "Kekeh",
        },
      ],
    };
  }

  addTask = (task: Task) => {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  };
  render() {
    return (
      <>
        <h1 className="text-violet-600 border-b border-b-violet-500 p-4 font-bold bg-black text-2xl md:text-3xl sticky top-0">
          <img src="/favicon.svg" className="inline w-6 md:w-10" />{" "}
          YetAnotherTodoList
        </h1>

        <div className="mt-5 m-auto max-w-lg p-4">
          <div className=" bg-gray-900 p-4 rounded-md shadow-md shadow-black">
          <TaskForm addTask={this.addTask} />
          </div>
          <hr className="mt-4 mb-4" />
          <TaskList tasks={this.state.tasks} />
        </div>
      </>
    );
  }
}

export default App;
