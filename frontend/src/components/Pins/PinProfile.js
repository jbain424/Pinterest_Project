import React from "react";
import axios from "axios";
import "../../css/SinglePin.css";
import { Link } from "react-router-dom";
import UserPins from "../User/UserPins.js";

let fwdArrow = require("../../assets/round-arrow_forward-24px.svg");
let bckArrow = require("../../assets/round-arrow_back_ios-24px.svg");

class PinProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onePin: []
    };
  }

  componentDidMount() {
    axios
      .get("/pins/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          onePin: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <body id="pinBody">
          <div className="container">
            <div className="pinInfo">
              <div className="pinImage">
                <img src={this.state.onePin.pin_url} alt="" />
              </div>

              <div className="pinName">{this.state.onePin.pin_name}</div>

              <div className="pinUrl">
                <Link to={`this.state.onePin.pin_url`} />
                {"Pinterest.com"}
              </div>

              <div className="pinCaption">{this.state.onePin.pin_caption}</div>

              <div className="psAndComs">
                <p className="pandc"> Photos and Comments </p>
                <Link to={"/pins/"}>Photos</Link>
                <Link to={"/pins/"}>Comments</Link>
              </div>

              <div className="pinComment">
                <p> Share feedback, ask a question or give a high five!</p>
                <br />
                <input
                  id="input"
                  type="text"
                  name=""
                  placeholder="Add Comment"
                />
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default PinProfile;
