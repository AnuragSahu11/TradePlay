import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context";

const RequiresAuth = ({ children }) => {
  let location = useLocation();
  const { userDataState } = useAuth();
  const { token } = userDataState;
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
