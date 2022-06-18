import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const WhiteButton = ({text, isFooterButton}) => {

  const positionStyle = isFooterButton ? 'inherit !important' : 'absolute';
  const buttonText = text ? text : "Apply Now";

  return (
    <div className="button_container" style={{marginTop: 20, position: positionStyle}}>
      <button className="white-button">{buttonText}</button>
    </div>
  )
}

export default WhiteButton;
