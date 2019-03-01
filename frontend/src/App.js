import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./css/NavBar.css";
import { matchPath } from "react-router";

import {NavBar} from "./components/Nav/NavBar.js";
import Home from "./components/Home.js";
import Pins from "./components/Pins.js";
import PinList from "./components/PinList.js"
import User from "./User/components/User.js";
import UserPins from "./User/components/UserPins.js";
import UserProfile from "./User/components/UserProfile.js";
import Boards from "./components/Boards.js";

import { getUser } from "./util/util.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userPic: "",
      boards: []
    };
  }

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="username/" component={User}/>
        </Switch>
      </div>
    );
  }
}

export default App;


// <main>
// <Switch>
// <Route exact path="/" component={Home} />
//
// <Route path="/pins/:id" component={Pins} />
//
// <Route
// path="/username/:id"
// render={props => <User {...props} username={username} />}
// />
// <Route path="/boards/:id/boards" component={Boards} />
// </Switch>
// </main>
