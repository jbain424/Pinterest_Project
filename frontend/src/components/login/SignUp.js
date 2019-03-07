import React from "react";
import "../../css/signup.css";
import Footer from "../Footer.js";

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

  handleChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <>
        <div>
          <body className="body">
            <div className="whitebox">
              <div>
                <img className="logo" src={epingle} alt="" />
                <h1 className="h1">Sign up to see more</h1>
                <h3 className="h3">
                  Access Épingle's best ideas with a free account
                </h3>
              </div>
              <div classname="form">
                <form onSubmit={this.props.handleSignup}>
                  <input
                    onChange={this.handleChange}
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                  />
                  <input
                    onChange={this.handleChange}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                  />
                  <input
                    onChange={this.handleChange}
                    id="age"
                    name="age"
                    type="text"
                    placeholder="Age"
                    value={this.state.age}
                  />
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
          </body>
        </div>
      </>
    );
  }
}

export default SignUp;
