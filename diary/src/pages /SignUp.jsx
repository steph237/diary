import React from "react";
import "./login.css";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import Axios from "axios";
import GetImages from "../components /Getimages";

function SignUp() {
  const [usernameReg, setUsernameReg] = useState("");
  const [pwdReg, setpwdReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      diary_users_username: usernameReg,
      diary_users_password: pwdReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="login mx-8 ">
      <div className="app-image mt-6">
        <GetImages />
      </div>
      <div>
        <div>
          <h1 className="text-slate-800 px-6 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
            {" "}
            Sign Up to get Started{" "}
          </h1>
        </div>
        <div className="form-content">
          <form className="p-6 " onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col pb-6">
              <label htmlFor="email">Enter Emails</label>
              <input
                type="text"
                name="email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
              />
            </div>

            <div className="pb-6">
              <label htmlFor="email">Create Password</label>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required=""
                onChange={(e) => {
                  setpwdReg(e.target.value);
                }}
              />
            </div>

            {/* <div>
              <label htmlFor="email">Confirm Password</label>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required=""
              />
            </div> */}

            <div className="flex justify-end py-4">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500"
                onClick={register}
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
