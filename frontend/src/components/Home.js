import React from "react";
import axios from "axios";
import { PinList } from "../components/Pins/PinList.js";
import "../css/Home.css";
import { Link } from "react-router-dom";

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
        <PinList pins={pins} onePin={onePin}/>
        <Link to={"/pins/" + onePin.id}><img src={onePin.pin_url} alt="" className="singlePin"/>
        </Link>
      </div>
    );
  }
}
export default Home;
