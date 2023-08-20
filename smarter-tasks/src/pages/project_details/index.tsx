import { TasksProvider } from "../../context/task/context";
import ProjectDetails from "./ProjectDetails";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Suspense } from "react";

export const ProjectDetailsIndex: React.FC = () => {
  return (
    <>
      <TasksProvider>
        <ErrorBoundary>
          <Suspense
            fallback={<div className="suspense-loading">Loading...</div>}
          >
            <ProjectDetails />
          </Suspense>
        </ErrorBoundary>
      </TasksProvider>
    </>
  );
};
