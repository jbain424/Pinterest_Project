import React from "react";
import { Link } from 'react-router-dom';


let logo = require('../../assets/epingle_logo.png');


export const NavLogo = () => {
  return (
    <>
      <Link to={"/"}>
        <img
          className="homelogo"
          alt="logo"
          src={logo}
          width="40px"
          height="40px"
        />
      </Link>
    </>
  );
};
