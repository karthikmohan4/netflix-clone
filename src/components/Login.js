import React, { useState } from "react";
import { Header } from "./Header";

export const Login = () => {
 const [isSignedInForm,setIsSignedInForm] =useState(true);
  const toggleSignInForm = ()=>{
  setIsSignedInForm(!isSignedInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://davidumer.github.io/clone-netflix/img/background.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12  p-12 bg-black my-36 absolute mx-auto right-0 left-0 text-white bg-opacity-90">
        <h1 className="font-bold text-white text-3xl py-5">{isSignedInForm?"Sign In":"Sign Up"}</h1>
        {!isSignedInForm && <input type="text" placeholder="Full Name" className="p-2 my-4 bg-gray-500 w-full"/>}
        <input type="text" placeholder="Email Address" className="p-2 my-4 bg-gray-500 w-full"/>
        <input type="password" placeholder="Password" className="p-2 my-4 bg-gray-500 w-full"/>
        <button className="p-4 my-4 bg-red-600 text-white w-full rounded-lg">{isSignedInForm?"Sign In":"Sign up"}</button>
        <p className="font-bold text-white py-4 cursor-pointer"  onClick={toggleSignInForm}>{isSignedInForm?"New to Netflix? Sign up now":"Already registered? Sign in now"}</p>
      </form>
    </div>
  );
};
