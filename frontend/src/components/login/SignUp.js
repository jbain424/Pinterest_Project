import React from "react";
import "../../css/signup.css";
import Footer from "../Footer.js";

let backsplash = require("../../assets/backsplash.png");

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
        <h1>This is the Sign Up Page</h1>
        <div className="whitebox">
          <div classname="form">
            <form onSubmit={this.props.handleSignup}>
              <input id="email" name="name" type="text" placeholder="Email" />
              <input
                id="password"
                name="name"
                type="text"
                placeholder="Password"
              />
              <input id="age" name="name" type="text" placeholder="Age" />
              <input id="submit" type="submit" value="signup"/>
              <button type="button" onClick={this.props.toggleForms}>Already have an account? Log In!</button>

            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
