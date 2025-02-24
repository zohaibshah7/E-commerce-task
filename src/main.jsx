import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";
// import UserProfile from "./pages/UserProfile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      ,
      <Route index element={<Home />} />,
      {/* <Route path="user-profile" element={<UserProfile />} />, */}
      <Route path="products" element={<Products />} />,
      <Route path="products/:id" element={<ProductDetail />} />,
      <Route path="cart" element={<ProtectedRoute component={Cart} />} />,
      <Route path="order-details" element={<ProtectedRoute component={OrderDetails} />} />
      <Route path="signup" element={<Signup />} />,
      <Route path="login" element={<Login />} />,
      <Route path="about" element={<About />} />,
      <Route path="contact" element={<Contact />} />,
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
    <AuthProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
      <ToastContainer />
    </AuthProvider>
);
