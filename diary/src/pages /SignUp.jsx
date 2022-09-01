import React from "react";
import "./login.css";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import Axios from "axios";
import GetImages from "../components /Getimages";

function SignUp() {
  const [usernameReg, setUsernameReg] = useState("");
  const [pwdReg, setpwdReg] = useState("");
  const [showModal, setShowModal] = React.useState(false);

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

            <div className="flex justify-end py-4">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500"
                onClick={() => {
                  register();
                  setShowModal(true);
                }}
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Success!!!</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Account successfully created. Please Log In to save diary
                    entries
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    LogIn
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default SignUp;
