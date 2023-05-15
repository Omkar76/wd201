import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="text-violet-600 border-b border-b-violet-500 p-4 font-bold bg-black sticky top-0">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl md:text-3xl">Task Manager</h2>
          <div className="">
            <Link to="/" className="ml-6 text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/tasks" className="ml-6 text-gray-300 hover:text-white">
              Tasks
            </Link>
            <Link to="/signin" className="ml-6 text-gray-300 hover:text-white">
              Signout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
