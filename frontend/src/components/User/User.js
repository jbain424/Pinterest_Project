import React from "react";
import "../../css/User.css";
import axios from "axios";
import { Route } from "react-router-dom";
import UserPins from "./UserPins.js";
import UserProfile from "./UserProfile.js";
import Boards from "../Boards.js";
import NavMenu from "../Nav/NavMenu"

export class User extends React.Component {
  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    console.log(this.props);
    axios
      .get(`/username/${this.props.match.params.id}`)
      .then(response => {
        this.props.setUser(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <UserProfile user={this.props.user} />
        <Route path="/username/:id/pins" component={UserPins} />
        <Route path="/username/:id/boards" component={Boards} />
      </>
    );
  }
}
