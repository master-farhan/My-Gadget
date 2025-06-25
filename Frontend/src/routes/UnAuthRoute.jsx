import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UnAuthRoute = ({ children }) => {
  const { users } = useSelector((state) => state.userReducer);

  return !users?.id ? children : <Navigate to="/" />;
};

export default UnAuthRoute;
