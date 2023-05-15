import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./pages/shared/AuthProvider";
type ProtectedRouteProps = {
  element: JSX.Element;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const authContext = useContext(AuthContext);
  if (authContext?.isAuthenticated) {
    return element;
  } else {
    return <Navigate to="/signin" />;
  }
};
