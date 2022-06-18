import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {TouchableHighlight} from "react-native-web";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const DarkButton = ({ bgColor, pressedBgColor, iconColor, onPress }) => {

  return (
    <div className="button">
      <FontAwesomeIcon icon={faArrowRight} style={{color: '#ffffff', fontSize: 14}} />
    </div>
  )


}

export default DarkButton;
