import UserContext from "config/userContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/login",
  children,
}) => {
  const user = useContext(UserContext);
  if (!user.username) {
    return <Navigate to={redirectPath} />;
  }
  return children ? <>children</> : <Outlet />;
};

export default ProtectedRoute;
