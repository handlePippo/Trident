import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to='/' replace />;
  }
  return children;
}
export default ProtectedRoute;
