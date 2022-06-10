import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context";
import { Outlet } from "react-router-dom";

const RequiresAuth = () => {
  let location = useLocation();
  const { userDataState } = useAuth();
  const { token } = userDataState;
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
