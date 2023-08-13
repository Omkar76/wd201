import { useContext, useEffect } from "react";
import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";

const App = () => {
  const currentTheme = useContext(ThemeContext);
  useEffect(() => {
    if (currentTheme.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentTheme.theme]);

  return (
    <div
      className={`h-full w-full mx-auto py-2 ${
        currentTheme.theme === "dark" ? "dark" : ""
      }`}
    >
      <MembersProvider>
        <ProjectsProvider>
          <RouterProvider router={router} />
        </ProjectsProvider>
      </MembersProvider>
    </div>
  );
};
export default App;
