import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      // alert("Please Enter Details!");
      toast.error("Please Enter Details!");
    } else {
      login(email, password);
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-100 rounded-lg p-8 flex flex-col mt-10">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Login
        </h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            onChange={handleInput}
            value={email}
            type="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            onChange={handleInput}
            value={password}
            type="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 cursor-pointer rounded text-lg"
        >
          Login
        </button>
        <p className="text-md text-gray-500 mt-3">
          Don't have an account?{" "}
          <Link
            className="text-orange-400 hover:text-orange-500 cursor-pointer"
            to="/signup"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
