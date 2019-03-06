import React from "react";
import "../css/signup.css";
import Footer from "./Footer.js";

let backsplash = require("../assets/backsplash.png");

class SignUp extends React.Component {
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
        <div className="backsplash">
          <img src={backsplash} alt="" />
        </div>
        <form className="form">
          <input id="email" name="name" type="text" placeholder="Email" />
          <input id="password" name="name" type="text" placeholder="Password" />
          <input id="age" name="name" type="text" placeholder="Age" />
        </form>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
