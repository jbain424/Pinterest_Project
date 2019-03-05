import React from "react";
import axios from "axios";
import { PinList } from "../components/Pins/PinList.js";
import "../css/Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    pins: [],
  };

  componentDidMount() {
    axios
      .get("/pins")
      .then(response => {
        this.setState({
          pins: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { pins } = this.state;
    return (
      <div>
        <PinList pins={pins} />
        <Link to={"/pins/" + pins.id}>
          <img src={pins.pin_url} alt="" className="singlePin" />
        </Link>
      </div>
    );
  }
}
export default Home;
