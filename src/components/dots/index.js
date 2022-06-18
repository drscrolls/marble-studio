import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Dots = () => {
  return (
    <div className="dotsContainer">
      <FontAwesomeIcon icon={faCircle} style={{color: '#781edc', fontSize: 8, marginRight: 4}} />
      <FontAwesomeIcon icon={faCircle} style={{color: '#ffffff', fontSize: 8}} />
    </div>
  )
}

export default Dots;
