import { useEffect } from "react";
import MainRoutes from "./routes/MainRoutes";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, []);

  return (
    <div className="pt-20">
      <MainRoutes />
    </div>
  );
};

export default App;
