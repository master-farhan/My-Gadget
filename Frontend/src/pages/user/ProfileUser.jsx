import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDeleteteUser,
  asyncLogOutUser,
} from "../../store/actions/userActions";
import { NavLink } from "react-router-dom";
import UpdateUser from "./UpdateUser";

const ProfileUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    dispatch(asyncLogOutUser());
    navigate("/login");
  };

  const deleteUser = () => {
    console.log(user);
    dispatch(asyncDeleteteUser(user.id, user));
    navigate("/register");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen w-[100%] px-5 py-20  md:px-10 lg:px-[5%] flex flex-col md:flex-row gap-[10vw]">
      <div className="">
        <h1 className="text-3xl whitespace-nowrap font-medium">My Account</h1>
        <div className="pt-5 flex md:flex-col text-sm md:text-xl whitespace-nowrap gap-5">
          <NavLink
            className={({ isActive }) =>
              `rounded-2xl ${
                isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
              }`
            }
            // to-------------------
            to={`/profile-user/${user.id}`}
          >
            Personal Details_
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `rounded-2xl ${
                isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
              }`
            }
            // to-------------------
            to={`/profile-user/order/${user.id}`}
          >
            Order Details_
          </NavLink>
        </div>
      </div>

      <div className="md:pt-10 w-[100%]">
        <h2 className="text-xl md:text-2xl font-medium">{user.username}</h2>
        <p className="pb-5">{user.email}</p>

        <UpdateUser />
        <div className="flex gap-5 flex-col text-sm pt-7  w-fit">
          <button
            className="cursor-pointer text-start hover:text-red-400"
            onClick={deleteUser}
          >
            Delete Account
          </button>
          <button
            className="cursor-pointer text-start hover:text-red-400"
            onClick={logOutUser}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
