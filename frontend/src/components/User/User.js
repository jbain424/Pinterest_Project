import React from "react";
import "../../css/User.css";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import UserPins from "./UserPins.js";
import UserProfile from "./UserProfile.js";
import Boards from "../Boards.js";

export class User extends React.Component {

  componentDidMount(){
    this.getUser()
  }

  getUser = () => {
    axios
      .get(`/username/${this.props.match.params.username}`)
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
