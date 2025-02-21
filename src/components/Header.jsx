import { useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Badge } from "antd";
import logo from "../assets/logo.png";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  // console.log(user);
  const { cartItems } = useContext(CartContext);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            {user ? (
              <>
                <button
                onClick={() => {
                    navigate("/user-profile")
                }}
                className="text-gray-500 hover:text-orange-400 mr-2 text-xl font-medium cursor-pointer transition">
                  {user.name} <UserOutlined />
                </button>
                <Link
                to="/order-details"
                className="py-2 px-4 border text-gray-600 hover:text-gray-400 font-medium mr-2 cursor-pointer rounded-lg text-sm transition"
                >
                  Orders
                </Link>
                <button
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  className="text-gray-800 bg-gray-200 hover:bg-gray-100 focus:ring-4 cursor-pointer focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signup"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 cursor-pointer focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
              >
                Register
              </Link>
            )}
            <Link
              to="/cart"
            >
              <Badge count={cartItems.length}>
                <ShoppingCartOutlined className="text-3xl"/>
              </Badge>
            </Link>
          </div>
          <div className="hidden lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col lg:flex-row lg:space-x-8">
              {["/", "/Products", "/About", "/Contact"].map((path, index) => (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 px-3 duration-200 ${
                        isActive ? "text-orange-400" : "text-gray-700"
                      } hover:text-orange-400 transition`
                    }
                  >
                    {path.replace("/", "") || "Home"}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
