import React, { useState } from "react";
import axios from "axios";
import { Link ,useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/admin/login", {
        username,
        password,
      });
      alert(response.data.msg || "login Succesfull");
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/course");
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.error || "Login Failed");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h1>
        <br />

        <input
          className="   w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black  placeholder-black  hover:placeholder-grey"
          type="text"
          placeholder="Enter ur name or email "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-black"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full mt-6 p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          onClick={handleLogin}
        >
          Submit
        </button>
        <p className="text-center  mt-4">
          Dont have an account|| new user{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
          {""}
        </p>
        <br />
        <br />
        <p className="text-gray-500">Or you can sign in with</p>
        <div class="px-6 sm:px-0 max-w-sm">
          <button
            type="button"
            class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign up with Google<div></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
