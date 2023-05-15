import React from "react";
import { User } from "../shared/AuthProvider";

const Dashboard: React.FC = () => {
  const userSerialized = localStorage.getItem("user")
  const user: User = JSON.parse(userSerialized!);

  return (
    <div className="min-h-screen flex  flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Dashboard
      </h1>

      <main>
        <p>Email : {user.email}</p>
        <p>Username : {user.name}</p>
      </main>
    </div>
  );
};

export default Dashboard;
