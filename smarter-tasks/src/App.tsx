import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

import HomePage from "./HomePage";
import Header from "./Header";
import NotFound from "./NotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import Dashboard from "./pages/dashboard";
import AuthProvider from "./pages/shared/AuthProvider";

function Layout() {
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
          {/* Layout with header is used for these pages */}
          <Route element={<Layout />}>
            <Route index element={<ProtectedRoute element={<HomePage />} />} />
            <Route
              path="/tasks"
              element={<ProtectedRoute element={<TaskApp />} />}
            />
            <Route
              path="/tasks/:id"
              element={<ProtectedRoute element={<TaskDetailsPage />} />}
            />
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
          </Route>

          {/* No Layout for these pages */}
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
