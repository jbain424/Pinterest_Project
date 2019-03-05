import React from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

export default class CreatePin extends React.Component {
  constructor() {
    super();
    this.state = {
      pin_name: "",
      pin_url: "",
      pin_caption: ""
    };
  }

  createPin = () => {
    axios.post("/", this.state)
    .then(response => {
      debugger
    })
    .catch(err => {
      console.log("error");
    })
  }

  handleChange = (event) => {
    debugger
  }


  render() {
    const { pin_name, pin_url, pin_caption } = this.state
    return (
      <div>
        <form className="createPinForm" onChange={this.handleChange}>
          <img src={this.pin_url} alt="" className="create_url" />
        </form>
      </div>
    );
  }
}
