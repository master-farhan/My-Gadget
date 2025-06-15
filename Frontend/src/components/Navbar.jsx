import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);

  const isLogin = JSON.parse(localStorage.getItem("user"));

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const admin = isLogin?.isAdmin;

  return (
    <header className="w-full h-15 px-5 md:px-10 lg:px-[5%] flex justify-between items-center fixed top-0 left-0 bg-white z-50  shadow">
      <h2 className="text-xl font-bold whitespace-nowrap mr-10 text-[#78B04F]">
        My Gadget
      </h2>

      <span className="flex gap-5">
        {/* Search  */}
        {/* Mobile Menu Icon */}
        <GrMenu
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleNav}
        />
      </span>

      {/* Navigation Links */}
      <nav
        className={`absolute top-15 left-0 w-full bg-[#fdfdfd] flex flex-col items-center gap-6 py-5 transition-all duration-300 ease-in-out z-40 
          ${isNavOpen ? "flex" : "hidden"} 
          md:static md:text-end md:flex md:w-fit md:flex-row md:gap-10 md:py-0 md:bg-transparent text-medium font-medium`}
      >
        <NavLink
          className={({ isActive }) =>
            `rounded-2xl ${
              isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
            }`
          }
          to="/"
          onClick={() => setIsNavOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-2xl ${
              isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
            }`
          }
          to="/products"
          onClick={() => setIsNavOpen(false)}
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-2xl md:mr-[20vw] ${
              isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
            }`
          }
          to="/about"
          onClick={() => setIsNavOpen(false)}
        >
          About
        </NavLink>

        {/* Search here */}
        <NavLink
          className={({ isActive }) =>
            `rounded-2xl ${
              isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
            }`
          }
          to="/cart"
          onClick={() => setIsNavOpen(false)}
        >
          Cart
        </NavLink>
        <span className="flex flex-col md:flex-row items-center gap-5">
          {admin ? (
            <NavLink
              className={({ isActive }) =>
                `rounded-2xl ${
                  isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
                }`
              }
              to="/admin"
              onClick={() => setIsNavOpen(false)}
            >
              Admin Pannel
            </NavLink>
          ) : isLogin ? (
            <NavLink
              className={({ isActive }) =>
                `rounded-2xl ${
                  isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
                }`
              }
              to={`/profile-user/${isLogin?.id}`}
              onClick={() => setIsNavOpen(false)}
            >
              My Account
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) =>
                `rounded-2xl ${
                  isActive ? "text-[#78B04F]" : "hover:text-[#78B04F]"
                }`
              }
              to="/login"
              onClick={() => setIsNavOpen(false)}
            >
              Login
            </NavLink>
          )}
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
