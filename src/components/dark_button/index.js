import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {TouchableHighlight} from "react-native-web";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const DarkButton = ({ text }) => {

  const buttonText = text ? text : "Join Our Community";

  return (
    <button className="darkBtn">
      {buttonText}
      <span style={{marginLeft: 10}}>
        <FontAwesomeIcon icon={faArrowRight} className="icon"/>
      </span>
    </button>
  )


}

export default DarkButton;
