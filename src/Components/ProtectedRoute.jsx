import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

// ProtectedRoute.jsx

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/Empty" replace />;
};

export default ProtectedRoute; // Ne zaboravite export!
