import React from "react";
import "../../css/login.css";
import Footer from "../Footer.js";
import axios from 'axios'

let epingle = require("../../assets/epingle_logo.png");

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  logInUser = () => {
    axios
    .post("/username/login", this.state)
    .then(response => {
      debugger
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.logInUser();

  }

  render() {
    return (
      <div>
        <body className="body">
          <div className="whitebox">
            <img className="logo" src={epingle} alt="" />
            <h1 className="h1">Welcome back, Jojo!</h1>
            <img className="logo2" src={epingle} alt="" />
            <div classname="form">
              <form onSubmit={this.handleSubmit}>
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
                <div className="h4">
                  <h4>Forgot your password?</h4>
                </div>
                <input id="submit" type="submit" value="Continue" />
                <button
                  type="button"
                  id="button"
                  onClick={this.props.toggleForms}
                >
                  {" "}
                  Don't Have An Account? Sign Up!
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </body>
      </div>
    );
  }
}

export default LogIn;
