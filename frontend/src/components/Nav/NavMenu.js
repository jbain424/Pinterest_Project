import React from "react";
import { Link } from 'react-router-dom';


export const NavMenu = () => {
  return (
    <>
    <div className="rightNav">
      <Link to="/">Home</Link>
      <Link to="/following">Following</Link>
      <Link to="/username">Username</Link>
    </div>
    </>
  );
};
