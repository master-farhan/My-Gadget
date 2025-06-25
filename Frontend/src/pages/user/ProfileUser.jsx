import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  asyncDeleteteUser,
  asyncLogOutUser,
} from "../../store/actions/userActions";

const ProfileUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logOutUser = () => {
    dispatch(asyncLogOutUser());
    navigate("/login");
  };

  const deleteUser = () => {
    dispatch(asyncDeleteteUser(user.id, user));
    navigate("/register");
  };

  return (
    <div className="min-h-screen w-full px-5 py-20 md:px-10 lg:px-[5%] flex flex-col md:flex-row gap-[5vw]">
      {/* Sidebar */}
      <aside className="md:w-1/4 flex-shrink-0">
        <h1 className="text-3xl font-semibold mb-5">My Account</h1>
        <nav className="flex md:flex-col text-base gap-3 md:gap-5">
          <NavLink
            to={`/profile-user/${user.id}`}
            end
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
              }`
            }
          >
            Personal Details_
          </NavLink>
          <NavLink
            to={`/profile-user/${user.id}/order/${user.id}`}
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
              }`
            }
          >
            Order Details_
          </NavLink>
        </nav>

        <div className="mt-10 flex flex-col gap-3 text-sm text-red-500">
          <button onClick={deleteUser} className="hover:text-red-400 text-start">
            Delete Account
          </button>
          <button onClick={logOutUser} className="hover:text-red-400 text-start">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">{user.username}</h2>
        <p className="text-gray-600 mb-6">{user.email}</p>

        {/* Nested content (UpdateUser or Order) */}
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileUser;
