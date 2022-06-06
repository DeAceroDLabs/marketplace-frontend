import UserContext from "config/userContext";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/login",
  children,
}) => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  if (!user.username) {
    navigate(`../`);
  }
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
