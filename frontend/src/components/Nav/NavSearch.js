import React from "react";
import { Link } from 'react-router-dom';


let magGlass = require('../../assets/magnifying_glass copy.png')


export const NavSearch = () => {
  return (
    <>
      <div className="leftNav">
        <img className="magGlass" src={magGlass} alt="magGlass" />
        <input className="searchBar" type="text" placeholder="Search" />
      </div>
    </>
  );
};
