import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { asyncLogOutUser } from "../../store/actions/userActions";

const ProfileUser = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    dispatch(asyncLogOutUser());
    navigate("/login");
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="">
        {" "}
        <button
          className="cursor-pointer hover:text-red-500 hover:underline"
          onClick={logOutUser}
        >
          Logout
        </button>
      </div>
      <div className=""></div>
      <h1>User Profile</h1>
      <Outlet />
    </div>
  );
};

export default ProfileUser;
