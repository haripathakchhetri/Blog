import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const NoLoginRoute = () => {

  const user = useAuth();

  return user ? <Navigate to={"/"} replace /> : <Outlet />
}
export default NoLoginRoute