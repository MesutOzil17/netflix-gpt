import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const toggleSignInForm = () => {
    setSignIn((p) => !p);
  };
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg')] h-screen">
      <Header />
      <div className="m-auto min-h-screen flex items-center justify-center">
        <form
          action=""
          className="w-3/12 p-10 flex flex-col bg-black text-white rounded-lg bg-opacity-80"
        >
          <span className="m-2 text-left font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </span>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 m-2 bg-gray-800"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 m-2 bg-gray-800"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-4 m-2 bg-gray-800"
          />
          <button className="p-2 m-2 bg-red-700 rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center cursor-pointer" onClick={toggleSignInForm}>
            New to Netflix? {isSignIn ? "Sign Up" : "Sign In"} now
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
