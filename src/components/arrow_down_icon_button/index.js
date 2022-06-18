import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const ArrowDownIconButton = ({ onPress }) => {

  return (
    <div className="arrowDownBtn">
      <FontAwesomeIcon icon={faChevronDown} className="icon"  />
    </div>
  )


}

export default ArrowDownIconButton;
