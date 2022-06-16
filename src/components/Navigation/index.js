import React from 'react'
import "./style.css";

const logoWhite = require("../../assets/logo-white.png");

const Header = () => {
  return (
    <div>
        <div className="nav">
            <div className="navLeft">
              <div className="logoContainer">
                <img className="logo" src={logoWhite}/>
              </div>
            </div>
            <div className="navRight">Menu</div>
        </div>
    </div>
  )
}

export default Header;
