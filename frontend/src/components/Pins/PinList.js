import React from "react";
import { Link } from "react-router-dom";

let more = require("../../assets/round-more_horiz-24px.svg");

export const PinList = props => {
  const { pins } = props;
  const postPins = pins.map(pin => {
    return (
      <div className="hoverbg">
        <Link to={"/pins/" + pin.id}>
          <img className="homeImg" alt="" src={pin.pin_url} />
        </Link>
        <div className="pinlistName">
          {pin.pin_name}
          <img src={more} alt="" />
        </div>
      </div>
    );
  });

  return <div className="homeContainer">{postPins}</div>;
};
