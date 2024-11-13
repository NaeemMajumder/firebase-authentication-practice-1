import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  let [errorMessage, setErrorMessage] = useState(null);
  let [showPass, setShowPass] = useState(false);

  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  let handleSignUp = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    let terms = event.target.terms.checked;


    if(!terms){
        return setErrorMessage("Accept the terms and conditions");
    }

    // Validate the password
    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, include an uppercase letter, and a number."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // console.log(result);
        // console.log(result.user);
        setErrorMessage(null);
      })
      .catch((error) => {
        console.log(error);
        // console.log(error.code);
        // console.log(error.message);
        setErrorMessage(error.message);
      });
  };

  let handleShowPassword = (event) => {
    event.preventDefault();
    if (showPass) {
      return setShowPass(false);
    }
    return setShowPass(true);
  };

  return (
    <>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-auto">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">Sign Up</h1>

        {/* alert error */}

        {errorMessage && (
          <div role="alert" className="alert bg-red-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSignUp} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <button
              onClick={handleShowPassword}
              className="btn btn-xs absolute right-2 top-12"
            >
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </button>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <label className="label text-xs justify-start gap-2">
                Already have an account?<NavLink to="/login" className={"text-purple-500 underline"}>Please Login</NavLink> 
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-info"
                name="terms"
              />
              <span className="label-text">Follow All The Terms & Conditions</span>
            </label>
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-primary">
              Login 
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
