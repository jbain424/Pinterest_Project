import React from "react";
import "../../css/login.css";
import Footer from "../Footer.js";

let backsplash = require("../../assets/backsplash.png");
let epingle = require("../../assets/epingle_logo.png");

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      age: ""
    };
  }

  render() {
    return (
      <div>
        <div className="whitebox">
          <img className="logo" src={epingle} alt="" />
          <h1 className="h1">Welcome back, Jojo!</h1>
          <img className="logo2" src={epingle} alt="" />
          <p className="email">jonelle.bain@gmail.com</p>
          <div classname="form">
            <form onSubmit={this.props.handleLogIn}>
              <input
                id="password"
                name="name"
                type="text"
                placeholder="Password"
              />
              <div className="h4"><h4>Forgot your password?</h4></div>
              <input id="submit" type="submit" value="Continue" />
              <button type="button" id="button" onClick={this.props.toggleForms}>
                {" "}
                Don't Have An Account? Sign Up!
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LogIn;
