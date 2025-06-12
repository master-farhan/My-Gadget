import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="h-[80vh] flex gap-5 relative">
      <div className="h-full p-5 md:px-10 lg:px-[5%]  w-fit flex flex-col gap-2 shadow">
        <div className="whitespace-nowrap">
          <NavLink
            className=""
            to="/admin/create-product"
            onClick={() => setIsNavOpen(false)}
          >
            Create Product
          </NavLink>
        </div>
      </div>
      <div className="h-full w-4/6">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
