import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from 'axios'

import { NavBar } from "./components/Nav/NavBar.js";
import Home from "./components/Home.js";
import { User } from "./components/User/User.js";
import PinProfile from "./components/Pins/PinProfile.js";
import CreatePin from "./components/Pins/CreatePin.js";

import SignUp from "./components/SignUp.js";
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
      isLoggedin: false,
      username: ""
    };
  }

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

  render() {
    const { user } = this.state;
    return (
      <div className="App">

        <NavBar />
        <Route path={"/signup/"} component={SignUp} />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path={"/pins/:id"} component={PinProfile} />

          <Route
            path={"/username/:id"}
            render={routeProps => {
              return (
                <User
                  user={this.state.user}
                  {...routeProps}
                  setUser={this.setUser}
                />
              );
            }}
          />
          <Route path={"/new"} component={CreatePin} />
        </Switch>
      </div>
    );
  }
}

export default App;
