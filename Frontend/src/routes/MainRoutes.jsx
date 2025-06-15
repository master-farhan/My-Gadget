import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ProfileUser from "../pages/user/ProfileUser";
import CreatePoduct from "../pages/admin/CreateProduct";
import UpdateProduct from "../pages/admin/UpdateProduct";
import Admin from "../pages/admin/Admin";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import Order from "../components/Order";
import UpdateUser from "../pages/user/UpdateUser";
import PageNotFound from "../PageNotFound";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  const { users } = useSelector((state) => state.userReducer);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      {users ? (
        <>
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create-product" element={<CreatePoduct />} />
          <Route path="/product/details/:id" element={<ProductDetails />}>
            <Route path="update-product" element={<UpdateProduct />} />
          </Route>
          <Route path="/profile-user/:id" element={<ProfileUser />} />
          <Route path="/profile-user/:id" element={<UpdateUser />} />
          <Route path="/profile-user/order/:id" element={<Order />} />
        </>
      ) : (
        <>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </>
      )}

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
