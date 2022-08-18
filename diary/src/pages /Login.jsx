import React from "react";
import "./login.css";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import Axios from "axios";
import GetImages from "../components /Getimages";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      diary_users_username: username,
      diary_users_password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
      console.log(response.data);
    });
  };

  return (
    <div className="login bg-red-50 mx-8 ">
      <div className="app-image">
        <GetImages />
      </div>
      <div>
        <div>
          <h1 className="text-slate-800 px-6 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
            {" "}
            Log in{" "}
          </h1>
        </div>
        <div className="form-content">
          <form className="p-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col pb-6">
              <label htmlFor="email">Enter Emails</label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="pb-6">
              <label htmlFor="email">Password</label>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required=""
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="flex justify-end py-4">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500"
                onClick={login}
              >
                Login
              </button>
            </div>
          </form>
          <h1> {loginStatus}</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
