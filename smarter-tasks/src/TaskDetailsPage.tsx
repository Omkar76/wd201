import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TaskItem } from "./types";

interface TaskDetailsPageParams extends Record<string, string> {
  id: string;
}

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<TaskDetailsPageParams>();
  const [tasks] = useLocalStorage<TaskItem[]>("tasks", []);

  const task = tasks.find((task) => task.id.toString() === id);

  if (!task) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{task.title}</h3>
      </div>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-gray-600">
        {new Date(task.dueDate).toLocaleDateString("en-IN")}
      </p>
    </div>
  );
};

export default TaskDetailsPage;
