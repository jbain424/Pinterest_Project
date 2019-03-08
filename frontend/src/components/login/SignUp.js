import React from "react";
import "../../css/signup.css";
import Footer from "../Footer.js";
import { withRouter } from 'react-router'

let epingle = require("../../assets/epingle_logo.png");

const SignUp = ({
  match,
  username,
  email,
  age,
  passwordDigest,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange,

}) => {
  const path = match.path;
  return (
<div>
          <h1> {path === "/auth/login" ? "Login" : "Register"} </h1>

          <div className="body">
              <div className="whitebox">
                <div>
                  <img className="logo" src={epingle} alt="" />
                  <h1 className="h1">Sign up to see more</h1>
                  <h3 className="h3">
                    Access Épingle's best ideas with a free account
                  </h3>
                </div>
                <div className="form">
                  <form onSubmit={registerUser}>
                    <input
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email"
                      value={email}
                    />
                    <input
                      onChange={handleChange}
                      id="username"
                      name="username"
                      type="username"
                      placeholder="username"
                      value={username}
                    />
                    <input
                      onChange={handleChange}
                      id="password"
                      name="passwordDigest"
                      type="password"
                      placeholder="Password"
                      value={passwordDigest}
                    />
                    <input
                      onChange={handleChange}
                      id="age"
                      name="age"
                      type="text"
                      placeholder="Age"
                      value={age}
                    />
                    <input id="submit" type="submit" value="Continue" />
                    <p className="terms">
                      By continuing, you agree to Pinterest's{" "}
                      <b>Terms of Service, Privacy Policy</b>
                    </p>
                    <button
                      id="button"
                      type="submit"
                    >
                      Already have an account? Log In!
                    </button>
                  </form>
                </div>
              </div>
              <Footer />
          </div>
          </div>
  );
};
export default withRouter (SignUp);
