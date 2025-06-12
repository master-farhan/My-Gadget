import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { asyncLogOutUser } from "../../store/actions/userActions";

const Admin = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    dispatch(asyncLogOutUser());
    navigate("/login")
  };

  return (
    <div className="h-[80vh] flex gap-5 relative">
      <div className="h-full p-5 md:px-10 lg:px-[5%]  w-fit flex flex-col gap-2 border-r border-gray-300">
        <div className="whitespace-nowrap flex gap-5 flex-col text-lg">
          <NavLink
            className="hover:underline transition-all duration-100"
            to="/admin/create-product"
          >
            Create Product
          </NavLink>

          <NavLink
            className="hover:underline transition-all duration-100"
            to="/products"
          >
            Update Product
          </NavLink>

          <NavLink
            className="hover:underline transition-all duration-100"
            to="/products"
          >
            Delete Product
          </NavLink>
          <br />
          <br />
          <button className="cursor-pointer hover:text-red-500 hover:underline" onClick={logOutUser}>Logout</button>
        </div>
      </div>
      <div className="h-full w-4/6">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
