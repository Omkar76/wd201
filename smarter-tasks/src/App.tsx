import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import HomePage from "./HomePage";
import Header from "./Header";
import NotFound from "./NotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import Dashboard from "./pages/dashboard";
import AuthProvider, { AuthContext } from "./pages/shared/AuthProvider";
import { useContext } from "react";

function ProtectedLayout() {
  const authContext = useContext(AuthContext);
  if (!authContext?.isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <Header />

      {/* render child routes element */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          {/* Protected routes with custom layout (includes <Header/>) */}
          <Route element={<ProtectedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/tasks" element={<TaskApp />} />
            <Route path="/tasks/:id" element={<TaskDetailsPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Unprotected routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
