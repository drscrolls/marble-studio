import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const MenuIconButton = ({ onPress }) => {

  return (
    <div className="menuIconBtn">
      <FontAwesomeIcon icon={faHamburger} className="icon"  />
    </div>
  )


}

export default MenuIconButton;
