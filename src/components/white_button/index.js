import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const WhiteButton = () => {
  return (
    <div className="button_container" style={{marginTop: 20}}>
      <button className="white-button">Apply now</button>
    </div>
  )
}

export default WhiteButton;
