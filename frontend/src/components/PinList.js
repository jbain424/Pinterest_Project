import React from "react";
import { Link } from "react-router-dom";

export const PinList = props => {
  const { pins } = props
  const postPins = pins.map((pin) =>{
    return <Link to={"/pins/" + pin.id }><img className="homeImg" alt="" src={pin.pin_url}/></Link>
  })
  return (
    <div className="homeContainer">
        {postPins}
    </div>
  )
}
