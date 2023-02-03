import { Navigate } from "react-router-dom";
import { Loading } from "../../components/ui/Loading";
import { useAuth } from "../../context/userContext";

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Loading size={50} />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
