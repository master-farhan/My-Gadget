import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncLogOutUser } from "../../store/actions/userActions";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Admin = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="min-h-[80vh] flex flex-col md:flex-row bg-gray-50 rounded-md shadow-md overflow-hidden relative">
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 z-20 text-[#78B04F]  p-2 rounded-md mt-12"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle Sidebar"
      >
        {/* Simple hamburger icon */}

        {sidebarOpen ? (
          <IoIosArrowDroprightCircle className="w-10 h-10" />
        ) : (
          <IoIosArrowDropleftCircle className="w-10 h-10" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          bg-white border-gray-200 pl-15 md:px-5 py-19 md:py-8 flex flex-col justify-between
          fixed top-0 left-0 h-full z-10 w-[220px] shadow-md
          transform transition-transform duration-300 ease-in-out
          md:static md:translate-x-0 md:shadow-none md:h-[90vh]
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#78B04F]">Admin Panel</h2>
          <nav className="space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 rounded-md transition-all font-medium ${
                    isActive
                      ? "bg-[#78B04F] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setSidebarOpen(false)} // close sidebar on mobile after click
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <button
          onClick={logOutUser}
          className="text-sm font-medium text-red-500 hover:underline hover:opacity-80 mt-8 text-left"
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
