import { Navigate } from "react-router-dom";

type RoleRouteProps = {
  children: React.ReactNode;
  allowedRoles: string[];
};

export default function RoleRoute({
  children,
  allowedRoles,
}: RoleRouteProps) {
  const userRole = "student";

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
}