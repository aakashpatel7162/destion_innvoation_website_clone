import React, { useState } from "react";
import data from "./../constant/constant";

export default function SignUp({ setIsUserSignup }) {
  const { emailRegex, passRegex } = data;

  const [userSignUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    confPassword: "",
    number: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confPassword: "",
    numberError: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...userSignUpData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const { username, email, password, confPassword, number } =
      data.errorMessages;

    if (userSignUpData.username.length <= 2) {
      newErrors.nameError = username;
    }
    if (!emailRegex.test(userSignUpData.email)) {
      newErrors.emailError = email;
    }
    if (!passRegex.test(userSignUpData.password)) {
      newErrors.passwordError = password;
    }
    if (userSignUpData.password !== userSignUpData.confPassword) {
      newErrors.confPassword = confPassword;
    }
    if (userSignUpData.number.length !== 10) {
      newErrors.numberError = number;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.email === userSignUpData.email) {
        alert("Account already exists.");
        return;
      }
    }

    alert("Account created successfully.");
    const userData = {
      email: userSignUpData.email,
      password: userSignUpData.password,
      username: userSignUpData.username,
      number: userSignUpData.number,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsUserSignup(true);
  };

  const handleSignUp = () => {
    setIsUserSignup(true);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-lg bg-white shadow-lg rounded-lg p-6 border gap-y-3"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Register
      </h2>

      <label className="text-left font-semibold text-gray-700">Username</label>
      <input
        name="username"
        type="text"
        placeholder="Please enter Username"
        value={userSignUpData.username}
        onChange={handleChange}
        className={`w-full h-12 bg-white shadow-md rounded-lg border transition duration-150 ease-in-out ${
          errors.nameError ? "border-red-500" : "border-gray-300"
        } font-sans p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
      {errors.nameError && (
        <span className="text-red-500 text-sm mt-1 block">
          {errors.nameError}
        </span>
      )}

      <label className="text-left font-semibold text-gray-700">Email</label>
      <input
        name="email"
        type="email"
        placeholder="Please enter email"
        value={userSignUpData.email}
        onChange={handleChange}
        className={`w-full h-12 bg-white shadow-md rounded-lg border transition duration-150 ease-in-out ${
          errors.emailError ? "border-red-500" : "border-gray-300"
        } font-sans p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
      {errors.emailError && (
        <span className="text-red-500 text-sm mt-1 block">
          {errors.emailError}
        </span>
      )}

      <label className="text-left font-semibold text-gray-700">Password</label>
      <div className="relative">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Please enter password"
          value={userSignUpData.password}
          onChange={handleChange}
          className={`w-full h-12 bg-white shadow-md rounded-lg border transition duration-150 ease-in-out ${
            errors.passwordError ? "border-red-500" : "border-gray-300"
          } font-sans p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {errors.passwordError && (
        <span className="text-red-500 text-sm mt-1 block">
          {errors.passwordError}
        </span>
      )}

      <label className="text-left font-semibold text-gray-700">
        Confirm Password
      </label>
      <div className="relative">
        <input
          name="confPassword"
          type={showConfPassword ? "text" : "password"}
          placeholder="Please confirm password"
          value={userSignUpData.confPassword}
          onChange={handleChange}
          className={`w-full h-12 bg-white shadow-md rounded-lg border transition duration-150 ease-in-out ${
            errors.confPassword ? "border-red-500" : "border-gray-300"
          } font-sans p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
        />
        <button
          type="button"
          onClick={() => setShowConfPassword(!showConfPassword)}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {showConfPassword ? "Hide" : "Show"}
        </button>
      </div>
      {errors.confPassword && (
        <span className="text-red-500 text-sm mt-1 block">
          {errors.confPassword}
        </span>
      )}

      <label className="text-left font-semibold text-gray-700">Number</label>
      <input
        name="number"
        type="number"
        placeholder="Please enter number"
        value={userSignUpData.number}
        onChange={handleChange}
        className={`w-full h-12 bg-white shadow-md rounded-lg border transition duration-150 ease-in-out ${
          errors.numberError ? "border-red-500" : "border-gray-300"
        } font-sans p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
      {errors.numberError && (
        <span className="text-red-500 text-sm mt-1 block">
          {errors.numberError}
        </span>
      )}

      <button className="w-full h-12 bg-blue-500 text-white shadow-lg rounded-lg border border-gray-300 cursor-pointer transition duration-150 ease-in-out hover:bg-blue-600">
        Sign Up
      </button>

      <p className="text-gray-700">
        Already have an account?{" "}
        <span
          onClick={handleSignUp}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Login
        </span>
      </p>
    </form>
  );
}
