import { Navigate, Outlet, } from "react-router"
import useAuth from "../hooks/useAuth";


const UserRoute = () => {

  const user = useAuth();



  return user ? <Outlet /> : <Navigate to={'/'} replace /> //user xa vane jaha jana man xa teha jani haina vane / route ma jane..replace le chai jun page bata aaxa tyo page ma back jana mildaina.
}
export default UserRoute