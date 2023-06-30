import React, {useEffect, useReducer} from 'react';
import { API_ENDPOINT } from '../../config/constants';
import {useProjectsDispatch, useProjectsState} from "../../context/projects/context";
import {fetchProjects} from "../../context/projects/actions";
import ProjectListItems from "./ProjectListItems";



const ProjectList: React.FC = () => {
  const dispatchProjects = useProjectsDispatch()
  const state = useProjectsState();
  useEffect(() => {
    fetchProjects(dispatchProjects);
  }, [fetchProjects, dispatchProjects]);

  if(!state){
    return <>something went wrong</>;
  }
  return (
    <div>
      {state.isLoading ? (
        <div>Loading...</div>       ) : (
        <div className="grid gap-4 grid-cols-4 mt-5">
          <ProjectListItems />
        </div>
      )}
    </div>
  );
};
export default ProjectList;