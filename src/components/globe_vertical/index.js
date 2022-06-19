import React from 'react'
import "./style.css";

const GlobeVertical = () => {

  return (
    <div className="globeImg">
      <lottie-player 
        src="https://assets6.lottiefiles.com/packages/lf20_vj96w7g2.json"  
        background="transparent"  
        speed="1"  
        style={{"width": "100%", "height": "100%"}} 
        loop 
        autoplay>
        </lottie-player>
    </div>
  )


}

export default GlobeVertical;
