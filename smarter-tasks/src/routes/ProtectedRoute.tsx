import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { pathname } = useLocation();
  const authContext = useContext(AuthContext);
  if (authContext?.isAuthenticated) {
    return <>{children}</>;
  }
  return <Navigate to="/signin" replace state={{ referrer: pathname }} />;
}
