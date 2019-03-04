import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./css/NavBar.css";
import { matchPath } from "react-router";

import {NavBar} from "./components/Nav/NavBar.js";
import Home from "./components/Home.js";
import {User} from "./components/User/User.js";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      boards: [],
      isLoggedin: false


    };
  }

  
  setUser = (user) => {
    this.setState({
      user: user
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path={"/username/:username"} render={(routeProps)=> {
              return <User user={this.state.user} {...routeProps} setUser={this.setUser}/>
            }}/>
        </Switch>
      </div>
    );
  }
}

export default App;