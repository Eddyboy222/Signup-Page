import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./LoginValidation";

function Login() {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value, // FIXED
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors); // FIXED

    // FIXED VALIDATION CHECK
    if (
      validationErrors.email === "" &&
      validationErrors.password === ""
    ) {
      axios
        .post("http://localhost:3000/login", values)
        .then(() => {
            navigate("/"); // FIXED
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#0a0a0a] p-6">
      <div className="bg-white/10 backdrop-blur-lg text-center p-8 rounded-2xl shadow-2xl w-96 relative border border-white/20">

        {/* Title */}
        <h1 className="text-white font-extrabold text-3xl mb-2">Welcome Back</h1>
        <p className="text-gray-400 text-sm mb-6">Login to continue</p>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            onChange={handleInput}
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff3c00]"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email}</span>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={handleInput}
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff3c00]"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}

          {/* Forgot password */}
          <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#ff3c00]" /> Remember me
            </label>
            <Link to="/forgot-password" className="hover:text-[#ff3c00]">
              Forgot Password?
            </Link>
          </div>

          {/* FIXED SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-[#ff3c00] to-[#e63600] text-white p-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Login
          </button>

          {/* Bottom text */}
          <p className="text-gray-400 text-sm mt-6">
            Don’t have an account?{" "}
            <Link to="/signuppage" className="text-[#ff3c00] hover:underline">
              Sign Up
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;
