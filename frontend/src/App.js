import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import LogIn from "./components/login/LogIn.js";
import SignUp from "./components/login/SignUp.js";
// import AuthForm from "./login/AuthForm";
// import Auth from "./utils/Auth";
// import PrivateRoute from "./utils/AuthRouting";

import "./css/NavBar.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      boards: [],
      isLoggedIn: false,
      displayLogInForm: false,
      username: ""
    };
  }

  handleSignup = event => {
    event.preventDefault();
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogIn = event => {
    event.preventDefault();
    this.setState({
      isLoggedIn: true
    });
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  // componentDidMount() {
  //   this.checkAuthenticateStatus();
  // }
  //
  // checkAuthenticateStatus = () => {
  //   axios.get("/users/isLoggedIn").then(user => {
  //     if (user.data.username === Auth.getToken()) {
  //       this.setState({
  //         isLoggedIn: Auth.isUserAuthenticated(),
  //         username: Auth.getToken()
  //       });
  //     } else {
  //       if (user.data.username) {
  //         this.logoutUser();
  //       } else {
  //         Auth.deauthenticateUser();
  //       }
  //     }
  //   });
  // };
  // logoutUser = () => {
  //   axios
  //     .post("/users/logout")
  //     .then(() => {
  //       Auth.deauthenticateUser();
  //     })
  //     .then(() => {
  //       this.checkAuthenticateStatus();
  //     });
  // };

  toggleForms = event => {
    this.setState(prevState => {
      return {
         displayLogInForm: !prevState.displayLogInForm };
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <Home />
        ) : this.state.displayLogInForm ? (
          <LogIn
            toggleForms={this.toggleForms}
            handleLogIn={this.handleLogIn}
          />
        ) : (
          <SignUp
            toggleForms={this.toggleForms}        handleSignup={this.handleSignup}
           />
        )}
      </div>
    );
  }
}

export default App;
