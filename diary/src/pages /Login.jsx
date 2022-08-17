import React from "react";
import "./login.css";
import "tailwindcss/tailwind.css";
import GetImages from "../components /Getimages";

function Login() {
  return (
    <div className="login mx-8 ">
      <div className="app-image">
        <GetImages />
      </div>
      <div>
        <div>
          <h1 className="text-slate-800 px-6 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
            {" "}
            Log in to get Started{" "}
          </h1>
        </div>
        <div className="form-content">
          <form className="p-6">
            <div className="flex flex-col">
              <label htmlFor="email">Enter Emails</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>

            <div>
              <label htmlFor="email">Password</label>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required=""
              />
            </div>

            <div className="flex justify-end py-4">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
