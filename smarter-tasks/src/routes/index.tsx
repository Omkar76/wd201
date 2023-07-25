import {createBrowserRouter, Navigate, Outlet} from "react-router-dom";

import AccountLayout from "../layouts/account"
import ProtectedRoute from "./ProtectedRoute"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Projects from "../pages/projects"
import Members from "../pages/members"
import Logout from "../pages/logout";
import ProjectContainer from "../pages/projects/ProjectContainer";
import ProjectDetails from "../pages/project_details/ProjectDetails";
import NewTask from "../pages/tasks/NewTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Signin />
    },
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path : "/logout",
        element: <Logout/>
    },
    {
        path: "projects",
        children: [
            { index: true, element: <Projects /> },
            {
                path: ":projectID",
                element: <>Show project details <Outlet /></>,
            }
        ]
    },
    // Protected Routes
    {
        path: "/account/",
        element: (
            <ProtectedRoute>
                <AccountLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Navigate to={"projects"} replace/>
            },
            {
                path: "projects",
                element: (<ProjectContainer />),
                children: [
                    { index: true, element: <Projects /> },
                    {
                      path: ":projectID",
                      element: <ProjectDetails/>,
                      children: [
                        { index: true, element: <></> },
                        {
                          path: "tasks",
                          children: [
                            { index: true, element: <Navigate to="../" replace /> },
                            { path: "new", element: <NewTask/> },
                            {
                              path: ":taskID",
                              children: [{ index: true, element: <>Show Task Details</> }],
                            },
                          ],
                        },
                      ],
                    },
                  ],
            },
            {
                path: "members",
                element: (<Members />),
                
            },
        ],
    },
]);

export default router;
