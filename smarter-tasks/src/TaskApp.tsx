import React, { useEffect } from "react";
import { TaskItem } from "./Task";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

const TaskApp : React.FC =()=>  {

  const [tasks, setTasks] = useLocalStorage<TaskItem[]>("tasks", []); 
  
  // console.log(tasks)
  const addTask = (task: TaskItem) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskID : number) =>{
    const newTasks = tasks.filter(task => task.id !== taskID);
    setTasks(newTasks);
  }

  useEffect(()=>{
    console.log("You got "+ tasks.length + " tasks")
  },[tasks.length])

  return (
    <>
      <h1 className="text-violet-600 border-b border-b-violet-500 p-4 font-bold bg-black text-2xl md:text-3xl sticky top-0">
        <img src="/favicon.svg" alt="YATL Logo" className="inline w-6 md:w-10" />{" "}
        YetAnotherTodoList
      </h1>

      <div className="mt-5 m-auto max-w-lg p-4">
        <div className=" bg-gray-900 p-4 rounded-md shadow-md shadow-black">
        <TaskForm addTask={addTask} />
        </div>
        <hr className="mt-4 mb-4" />
        <TaskList tasks={tasks}  deleteTask={deleteTask}/>
      </div>
    </>
  );
  }

export default TaskApp;
