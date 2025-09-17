import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center h-screen text-center bg-[#1a1e1c] text-white px-5">
      <h1 className="text-6xl font-bold text-purple-500 animate-bounce">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-[#ADB2B1] mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-sm font-semibold transition duration-300"
      >
        ⬅ Go Back Home
      </button>
    </section>
  );
};

export default ErrorPage;
