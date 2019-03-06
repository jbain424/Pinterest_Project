import React from "react";
import { Link } from "react-router-dom";

export const PinList = props => {
  const { pins } = props;
  const postPins = pins.map(pin => {
    return (
      <div className='hoverbg'>
        <Link to={"/pins/" + pin.id}>
          <img className="homeImg" alt="" src={pin.pin_url} />
          <div className="pinlistName">{pin.pin_name}</div>
        </Link>

      </div>
    );
  });

  return <div className="homeContainer">{postPins}</div>;
};
