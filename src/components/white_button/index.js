import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const WhiteButton = ({text}) => {
  
  const buttonText = text ? text : "Apply Now";

  return (
    <button className="whiteBtn">
      {buttonText}
      <span style={{marginLeft: 10}}>
        <FontAwesomeIcon icon={faArrowRight} className="icon"/>
      </span>
    </button>
  )
}

export default WhiteButton;
