import React from "react";

const Logo = require("../img/AirbnbLogo.png");

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="logo" className="nav--logo" />
    </nav>
  );
}
