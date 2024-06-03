import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex  items-center justify-center bg-[rgb(113,83,160)]">
      <div className="bg-white p-20 rounded-lg shadow-xl w-full max-w-3xl">
        <h1 className="text-5xl font-bold mb-24 text-center">Login to Your Account</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="w-full px-6 text-2xl py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="w-full px-6 py-3 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {error && <div className="text-red-500 text-lg">{error}</div>}
          <div>
            <button type="submit" className="w-full text-2xl mt-14 bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition duration-200">
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-28 text-center">
          <h1 className="text-xl">New Here?</h1>
          <Link to="/signup">
            <button type="button" className="mt-4 text-2xl bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
