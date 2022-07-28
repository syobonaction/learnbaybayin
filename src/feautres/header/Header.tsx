import * as React from "react";
import './Header.scss';

function Header() {
  const logo = require('../../assets/images/baybayin.png');

  return(
    <div className="header_container">
        <img className="header_logo" src={logo} alt="Learn Baybayin logo"></img>
        <nav className="header_nav">
          <li>
            <a href="">Sign In</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </nav>
    </div>
  );
};

export default Header;