import useAuth from "../../hooks/useAuth"
import OrderData from "../order/OrderData";
import UserProfile from "./UserProfile";

const ProfileMain = () => {

  const user = useAuth();

  return (
    <div className="grid grid-cols-col-divide p-2 items-start">

      <UserProfile user={user} />
      <OrderData user={user} />


    </div>
  )
}
export default ProfileMain