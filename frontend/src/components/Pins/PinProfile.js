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
        <div id="container">
          <div className="allThings" id="pinBackground">
            <div className="box pinImg">
              <img src={this.state.onePin.pin_url} alt="" />
            </div>

            <div className=" box pinName">{this.state.onePin.pin_name}</div>

            <div className="pinUrl">
              <Link to={`this.state.onePin.pin_url`} />
              {"Pinterest.com"}
            </div>

            <div className="box pinCaption">
              {this.state.onePin.pin_caption}
            </div>

            <div className="box psAndComs">
              <p className="pandc"> Photos and Comments </p>
              <Link to={"/pins/"}>Photos</Link>
              <Link to={"/pins/"}>Comments</Link>
            </div>

            <div className="box pinComment">
              <p> Share feedback, ask a question or give a high five!</p>
              <br />
              <input id="input" type="text" name="" placeholder="Add Comment" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PinProfile;
