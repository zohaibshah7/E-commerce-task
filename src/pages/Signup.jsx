import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const userDetail = {
    name: "",
    email: "",
    password: "",
    id: "",
  };

  const { user, signup } = useContext(AuthContext);
  const [data, setData] = useState(userDetail);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.name === "" || data.email === "" || data.password === "") {
      // alert("Please Enter Detail!");
      toast.info("Please Enter Details!");
    } else {
      signup(data);
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-100 rounded-lg p-8 flex flex-col mt-10">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Sign Up
        </h2>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Full Name
          </label>
          <input
            onChange={handleInput}
            type="text"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            onChange={handleInput}
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
            type="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 cursor-pointer rounded text-lg"
        >
          Signup
        </button>
        <p className="text-md text-gray-500 mt-3">
          Already a member?{" "}
          <Link
            className="cursor-pointer text-orange-400 hover:text-orange-500"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
