import React from "react";
import { NavLogo, NavMenu, NavSearch } from '.';
import '../../css/NavBar.css'

export const NavBar = () => {
  return (
    <div className="navbar">
      <NavLogo />
      <NavSearch />
      <NavMenu />
    </div>
  );
};
