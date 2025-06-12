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

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/create-product" element={<CreatePoduct />} />
      <Route path="/product/details/:id" element={<ProductDetails />}>
        {" "}
        <Route path="update-product" element={<UpdateProduct />} />
      </Route>{" "}
      <Route path="/profile-user" element={<ProfileUser />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
