import React, { useState } from "react";
import data from "./../constant/constant";
import "./auth.style.css";
import IMAGES from "../assets/Images";

export default function Login({ setIsUserSignup, userLoged }) {
  const { emailRegex, passRegex } = data;
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordError, setForgotPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    setIsUserSignup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLoginData({ ...userLoginData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleForgotPasswordChange = (e) => {
    setForgotPasswordEmail(e.target.value);
    setForgotPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, loginPass } = data.errorMessages;

    const newErrors = {};

    if (!emailRegex.test(userLoginData.email)) {
      newErrors.emailError = email;
    }
    if (!passRegex.test(userLoginData.password)) {
      newErrors.passwordError = loginPass;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      const userEmail = userData.email;
      const userPassword = userData.password;

      if (userEmail !== userLoginData.email) {
        setErrors({ emailError: "You have not signed up with this email" });
        return;
      }
      if (userPassword !== userLoginData.password) {
        setErrors({ passwordError: "Password is not correct" });
        return;
      }
      alert("You are logged in successfully");
      userLoged(true);
    } else {
      alert("You are not signed up");
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (emailRegex.test(forgotPasswordEmail)) {
      alert(`Verification link sent to ${forgotPasswordEmail}`);
      setShowForgotPassword(false);
    } else {
      setForgotPasswordError("Please enter a valid email.");
    }
  };

  return (
    <>
      {showForgotPassword ? (
        <form
          onSubmit={handleForgotPasswordSubmit}
          className="flex flex-col items-center w-full max-w-md bg-white shadow-lg rounded-lg p-6 gap-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Forgot Password
          </h2>

          <label
            htmlFor="forgotEmail"
            className="w-full text-left text-gray-700 font-medium"
          >
            Email
          </label>
          <input
            id="forgotEmail"
            name="forgotEmail"
            type="email"
            placeholder="Please enter your email"
            value={forgotPasswordEmail}
            onChange={handleForgotPasswordChange}
            className={`w-full h-12 bg-white shadow-md rounded-lg border transition duration-150 ease-in-out ${
              forgotPasswordError ? "border-red-500" : "border-gray-300"
            } font-sans p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {forgotPasswordError && (
            <span className="text-red-500 text-sm mt-1 block text-left">
              {forgotPasswordError}
            </span>
          )}

          <button className="w-full h-12 bg-blue-500 text-white shadow-lg rounded-lg border border-gray-300 cursor-pointer transition duration-150 ease-in-out hover:bg-blue-600">
            Send Verification Link
          </button>

          <div
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => setShowForgotPassword(false)}
          >
            Back to Login
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start w-full max-w-md bg-white shadow-lg rounded-lg p-6 gap-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Login
          </h2>

          <label
            htmlFor="email"
            className="w-full text-left text-gray-700 font-medium"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Please enter email"
            value={userLoginData.email}
            onChange={handleChange}
            className={`w-full h-12 bg-white shadow-md rounded-lg border transition duration-150 ease-in-out ${
              errors.emailError ? "border-red-500" : "border-gray-300"
            } font-sans p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.emailError && (
            <span className="text-red-500 text-sm mt-1 block text-left">
              {errors.emailError}
            </span>
          )}

          <label
            htmlFor="password"
            className="w-full text-left text-gray-700 font-medium"
          >
            Password
          </label>
          <div className="relative w-full">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Please enter Password"
              value={userLoginData.password}
              onChange={handleChange}
              className="w-full h-12 bg-white shadow-md rounded-lg border border-gray-300 font-sans p-2 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.passwordError && (
            <span className="text-red-500 text-sm mt-1 block text-left">
              {errors.passwordError}
            </span>
          )}

          <div
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot Password?
          </div>

          <button className="w-full h-12 bg-blue-500 text-white shadow-lg rounded-lg border border-gray-300 cursor-pointer transition duration-150 ease-in-out hover:bg-blue-600">
            Login
          </button>

          <button
            className="w-full h-12 text-bl shadow-lg rounded-lg border border-gray-300 flex items-center justify-center cursor-pointer transition duration-150 ease-in-out"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <img
              src={IMAGES.googleIcon}
              alt="Google Icon"
              className="w-6 h-6 mr-2"
              style={{ backgroundColor: "transparent" }}
            />
            Sign In With Google
          </button>

          <p className="text-gray-700">
            Don't have an account?{" "}
            <span
              onClick={handleSignUp}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </form>
      )}
    </>
  );
}
