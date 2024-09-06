import { Navigate, Outlet, useLocation } from "react-router"
import useAuth from "../hooks/useAuth";

const AdminRoute = () => {

  const user = useAuth();

  // const location = useLocation();
  // console.log(location);

  return user?.isAdmin ? <Outlet /> : <Navigate to={'/'} replace /> //user Admin ho vane jaha jana man xa teha jani haina vane / route ma jane..replace le chai jun page bata aaxa tyo page ma back jana mildaina.
}
export default AdminRoute