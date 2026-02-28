import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const RoutesContext = createContext();

export const useProtectedRoutes = () => {
  if (!RoutesContext) {
    throw new Error("No such context exists");
  }

  return useContext(RoutesContext);
};

const ProtectedRoutes = ({ children }) => {
  const { username, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bg-page">
        <p className="text-text-secondary">Loading...</p>
      </div>
    );
  }

  if (!username) {
    return <Navigate to="/SignUp" />;
  }

  return <RoutesContext.Provider>{children}</RoutesContext.Provider>;
};

export default ProtectedRoutes;
