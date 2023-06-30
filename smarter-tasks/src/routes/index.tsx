import {createBrowserRouter, Navigate} from "react-router-dom";

import AccountLayout from "../layouts/account"
import ProtectedRoute from "./ProtectedRoute"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Projects from "../pages/projects"
import Members from "../pages/members"
import Logout from "../pages/logout";

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
    // Protected Routes
    {
        path: "/account",
        element: (
            <ProtectedRoute>
                <AccountLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Navigate to={"/account/projects"} replace/>
            },
            {
                path: "/account/projects",
                element: (<Projects />)
            },
            {
                path: "/account/members",
                element: (<Members />)
            },
        ],
    },
]);

export default router;
