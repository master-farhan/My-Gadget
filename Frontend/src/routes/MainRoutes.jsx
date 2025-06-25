import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Dashboard from "../pages/admin/Dashboard";

// Lazy loaded pages
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Cart = lazy(() => import("../pages/Cart"));
const ProfileUser = lazy(() => import("../pages/user/ProfileUser"));
const UpdateUser = lazy(() => import("../pages/user/UpdateUser"));
const Order = lazy(() => import("../components/Order"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const UpdateProduct = lazy(() => import("../pages/admin/UpdateProduct"));
const Admin = lazy(() => import("../pages/admin/Admin"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const About = lazy(() => import("../pages/About"));
const PageNotFound = lazy(() => import("../PageNotFound"));

// Route Guards
const AuthRoute = lazy(() => import("./AuthRoute"));
const UnAuthRoute = lazy(() => import("./UnAuthRoute"));

const MainRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />

      {/* Authenticated Routes */}
      <Route
        path="/cart"
        element={
          <AuthRoute>
            <Cart />
          </AuthRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <AuthRoute>
            <Admin />
          </AuthRoute>
        }
      >
        <Route index element={<Dashboard />} />
      </Route>

      <Route
        path="/admin/create-product"
        element={
          <AuthRoute>
            <CreateProduct />
          </AuthRoute>
        }
      />

      <Route path="/product/details/:id" element={<ProductDetails />}>
        <Route
          path="update-product"
          element={
            <AuthRoute>
              <UpdateProduct />
            </AuthRoute>
          }
        />
      </Route>

      {/* Nested User Profile Routes */}
      <Route
        path="/profile-user/:id"
        element={
          <AuthRoute>
            <ProfileUser />
          </AuthRoute>
        }
      >
        <Route
          index
          element={
            <AuthRoute>
              <UpdateUser />
            </AuthRoute>
          }
        />
        <Route
          path="order/:id"
          element={
            <AuthRoute>
              <Order />
            </AuthRoute>
          }
        />
      </Route>

      {/* Unauthenticated Routes */}
      <Route
        path="/register"
        element={
          <UnAuthRoute>
            <Register />
          </UnAuthRoute>
        }
      />
      <Route
        path="/login"
        element={
          <UnAuthRoute>
            <Login />
          </UnAuthRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
