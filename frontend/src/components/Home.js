import React from "react";
import axios from "axios";
import {PinList} from './PinList.js'
import "../css/Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    pins: [],
    pin_name: ""
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
    return <PinList pins={pins} />;
  }
}
export default Home;
