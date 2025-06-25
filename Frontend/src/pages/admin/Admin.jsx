import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncLogOutUser } from "../../store/actions/userActions";

const Admin = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    dispatch(asyncLogOutUser());
    navigate("/login");
  };

  const navLinks = [
    { name: "Create Product", path: "/admin/create-product" },
    { name: "Update Product", path: "/products" },
    { name: "Delete Product", path: "/products" },
  ];

  return (
    <div className="min-h-[80vh] flex bg-gray-50 rounded-md shadow-md overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[220px] bg-white border-r border-gray-200 px-5 py-8 flex flex-col justify-between">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#78B04F]">Admin Panel</h2>
          <nav className="space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md transition-all font-medium ${
                    isActive
                      ? "bg-[#78B04F] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <button
          onClick={logOutUser}
          className="text-sm font-medium text-red-500 hover:underline hover:opacity-80"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
