import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";

export const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm);
  };
  const handleButtonClick = () => {
    console.log(email.current.value);
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://davidumer.github.io/clone-netflix/img/background.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12  p-12 bg-black my-36 absolute mx-auto right-0 left-0 text-white bg-opacity-90"
      >
        <h1 className="font-bold text-white text-3xl py-5">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedInForm && (
          <input 
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 bg-gray-500 w-full"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-4 bg-gray-500 w-full"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-4 bg-gray-500 w-full"
        />
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 text-white w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignedInForm ? "Sign In" : "Sign up"}
        </button>
        <p
          className="font-bold text-white py-4 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignedInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
