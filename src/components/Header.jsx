import React from "react";
import image from "../images/logo.svg";

const Header = ({ text }) => {
  return (
    <div className="center">
      <img src={image}></img>
    </div>
  );
};

export default Header;
