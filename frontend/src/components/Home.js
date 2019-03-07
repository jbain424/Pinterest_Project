import React from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import { PinList } from "../components/Pins/PinList.js";
import PinProfile from "../components/Pins/PinProfile.js";
import CreatePin from "../components/Pins/CreatePin.js";
import { User } from "../components/User/User.js";
import { NavBar } from "../components/Nav/NavBar.js";

import "../css/Home.css";

class Home extends React.Component {
  state = {
    pins: [],
    onePin: ""
  };

  componentDidMount() {
    axios
      .get("/pins")
      .then(response => {
        this.setState({
          pins: response.data.data,
          onePin: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { pins, onePin } = this.state;
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            exact
            path={"/"}
            render={routeProps => {
              return (
                <div>
                  <PinList pins={pins} onePin={onePin} />
                  <Link to={"/pins/" + onePin.id}>
                    <img src={onePin.pin_url} alt="" className="singlePin" />
                  </Link>
                </div>
              );
            }}
          />
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
export default Home;
