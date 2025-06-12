import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="w-full h-15 px-5 md:px-10 lg:px-[5%] flex justify-between items-center fixed top-0 left-0 bg-white z-50  shadow">
      <h2 className="text-xl font-bold whitespace-nowrap mr-10">House</h2>

      {/* Mobile Menu Icon */}
      <GrMenu
        className="md:hidden text-2xl cursor-pointer"
        onClick={toggleNav}
      />

      {/* Navigation Links */}
      <nav
        className={`absolute top-15 left-0 w-full bg-white flex flex-col items-center gap-6 py-5 transition-all duration-300 ease-in-out z-40 
          ${isNavOpen ? "flex" : "hidden"} 
          md:static md:text-end md:flex md:w-fit md:flex-row md:gap-10 md:py-0 md:bg-transparent`}
      >
        <NavLink
          className="shadow px-4 rounded-2xl"
          to="/"
          onClick={() => setIsNavOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          className="shadow px-4 rounded-2xl"
          to="/products"
          onClick={() => setIsNavOpen(false)}
        >
          Products
        </NavLink>
        <NavLink
          className="shadow px-4 rounded-2xl"
          to="/cart"
          onClick={() => setIsNavOpen(false)}
        >
          Cart
        </NavLink>

        {user ? (
          <NavLink
            className="shadow px-4 rounded-2xl"
            to="/admin"
            onClick={() => setIsNavOpen(false)}
          >
            Admin
          </NavLink>
        ) : (
          <NavLink
            className="shadow px-4 rounded-2xl"
            to="/login"
            onClick={() => setIsNavOpen(false)}
          >
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
