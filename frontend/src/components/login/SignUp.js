import React from "react";
import "../../css/signup.css";
import Footer from "../Footer.js";

let backsplash = require("../../assets/backsplash.png");
let epingle = require("../../assets/epingle_logo.png");

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
        <div className="whitebox">
          <div>
            <img className="logo" src={epingle} alt="" />
            <h1 className="h1">Sign up to see more</h1>
            <h3 className="h3">
              Access Pinterest's best ideas with a free account
            </h3>
          </div>
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
              <input id="submit" type="submit" value="Continue" />
              <p className="terms">
                By continuing, you agree to Pinterest's{" "}
                <b>Terms of Service, Privacy Policy</b>
              </p>
              <button
                id="button"
                type="button"
                onClick={this.props.toggleForms}
              >
                Already have an account? Log In!
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
