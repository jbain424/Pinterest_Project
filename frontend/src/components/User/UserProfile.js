import React from "react";
import { Link } from "react-router-dom";
import "../../css/User.css";

let plus = require("../../assets/plus.png");
let pencil = require("../../assets/pencil.png");
let share = require("../../assets/share.png");

export const UserProfile = props => {
  return (
    <>
      <div className="userContainer">
        <span className="buttons">
          <Link to={"/"}>
            <img className="createPin" alt="logo" src={plus} />
          </Link>

          <Link to={"/pins/"}>
            <img className="editPin" alt="logo" src={pencil} />
          </Link>

          <Link to={"/"}>
            <img className="sharePin" alt="logo" src={share} />
          </Link>
        </span>

        <div className="userProfile">
          {props.user.username}
          <p className="followers"> 10 followers • 5 following </p>
        </div>

        <img id="userPic" src={props.user.profile_pic} alt="" />

        <div className="boardsNpins">
          <div className="boards">
            <Link to={`/username/${props.user.id}/boards/`}>Boards</Link>
            <Link to={`/username/${props.user.id}/pins/`}>Pins</Link>
          </div>

          <div className="allUserPins">{props.user.pin_url}</div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
