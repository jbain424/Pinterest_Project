import React from "react";
import "../../css/signup.css";
import Footer from "../Footer.js";

let backsplash = require("../../assets/backsplash.png");

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
      <h1> THis is the Log In Page </h1>
        <div className="whitebox">
          <div classname="form">
            <form onSubmit={this.props.handleLogIn}>
              <input id="email" name="name" type="text" placeholder="Email" />
              <input
                id="password"
                name="name"
                type="text"
                placeholder="Password"
              />
              <input id="age" name="name" type="text" placeholder="Age" />
              <input id="submit" type="submit" value="signup"/>
              <button type="button" onClick={this.props.toggleForms}> Don't Have An Account? Sign Up!</button>

            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LogIn;
