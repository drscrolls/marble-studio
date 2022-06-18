import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {TouchableHighlight} from "react-native-web";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const DarkButton = ({ text, type }) => {

  const buttonText = text ? text : "Join Our Community";
  var buttonClass = getClassName(type);

  return (
    <div className="darkBtnContainer" style={{display: 'unset'}}>
      <button className={buttonClass}>
        {buttonText}
        <span style={{marginLeft: 10}}>
          <FontAwesomeIcon icon={faArrowRight} className="icon"/>
        </span>
      </button>
    </div>
  )


}

function getClassName(type){
  switch(type){
    case "gradient":
      return "darkBtnGradient";
      break;

    case "alt":
      return "darkBtnAlt";
      break;

    default:
      return "darkBtn";
      break;
  }
}

export default DarkButton;
