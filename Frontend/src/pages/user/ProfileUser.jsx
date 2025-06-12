import { Outlet } from "react-router-dom";

const ProfileUser = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1>hi</h1>
      <Outlet />
    </div>
  );
};

export default ProfileUser;
