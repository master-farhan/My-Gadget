import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({ children }) => {
  const { users } = useSelector((state) => state.userReducer);

  return users?.id ? children : <Navigate to="/login" />;
};

export default AuthRoute;
