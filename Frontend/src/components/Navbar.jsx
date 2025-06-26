import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import {
  FaCartPlus,
  FaUserCircle,
  FaSignOutAlt,
  FaUserShield,
  FaSignInAlt,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const isLoggedIn = !!user?.id;
  const isAdmin = user?.isAdmin;

  return (
    <header className="w-full h-16 px-5 md:px-10 lg:px-[5%] flex justify-between items-center fixed top-0 left-0 bg-white z-50 shadow-md">
      <h2 className="text-xl font-bold whitespace-nowrap text-[#78B04F] tracking-wide">
        My<span className="text-gray-700">Gadget</span>
      </h2>

      {!isNavOpen ? (
        <>
          <GrMenu
            className="md:hidden text-[#78B04F] text-2xl cursor-pointer"
            onClick={toggleNav}
          />
        </>
      ) : (
        <>
          <IoMdClose
            className="md:hidden text-[#78B04F] text-2xl cursor-pointer"
            onClick={toggleNav}
          />
        </>
      )}

      <nav
        className={`fixed md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex items-center flex-col md:flex-row md:items-center gap-6 md:gap-8 p-5 md:p-0 transition-all duration-300 shadow-md md:shadow-none z-40 ${
          isNavOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 md:scale-100 md:opacity-100 hidden md:flex"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setIsNavOpen(false)}
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive ? "text-[#78B04F]" : "hover:text-[#78B04F] text-gray-700"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          onClick={() => setIsNavOpen(false)}
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive ? "text-[#78B04F]" : "hover:text-[#78B04F] text-gray-700"
            }`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setIsNavOpen(false)}
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive ? "text-[#78B04F]" : "hover:text-[#78B04F] text-gray-700"
            }`
          }
        >
          About
        </NavLink>

        {isLoggedIn ? (
          <div className="flex flex-col md:flex-row items-center gap-5">
            {isAdmin ? (
              <NavLink
                to="/admin"
                onClick={() => setIsNavOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive
                      ? "text-[#78B04F]"
                      : "hover:text-[#78B04F] text-gray-700"
                  }`
                }
              >
                <FaUserShield /> Admin Panel
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/cart"
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${
                      isActive
                        ? "text-[#78B04F]"
                        : "hover:text-[#78B04F] text-gray-700"
                    }`
                  }
                >
                  <FaCartPlus /> Cart
                </NavLink>

                <NavLink
                  to={`/profile-user/${user?.id}`}
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${
                      isActive
                        ? "text-[#78B04F]"
                        : "hover:text-[#78B04F] text-gray-700"
                    }`
                  }
                >
                  <FaUserCircle /> My Account
                </NavLink>
              </>
            )}

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            onClick={() => setIsNavOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-[#78B04F]"
                  : "hover:text-[#78B04F] text-gray-700"
              }`
            }
          >
            <FaSignInAlt /> Login
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
