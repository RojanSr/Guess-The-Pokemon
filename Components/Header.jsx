import React from "react";
import Logo from "../images/main-logo.png";

export default function Header() {
  return (
    <nav>
      <a href="#">
        <img src={Logo} alt="Pokemon Logo" className="nav--logo" />
      </a>

      <ul className="nav--items">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">My Collection</a>
        </li>
        <li className="nav-item">
          <a href="#">Collectables</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact us</a>
        </li>
        <li className="nav-item">
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
}
