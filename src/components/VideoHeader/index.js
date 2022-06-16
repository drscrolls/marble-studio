import React from 'react'
import { ParallaxBanner, ParallaxProvider, Parallax } from 'react-scroll-parallax'
import "./style.css";

const VideoHeader = () => {
  return (
    <div className="mainHeaderContainer">
      <div className="videoContainer">
        
        <ParallaxProvider>
          
            <ParallaxBanner
              // className="bannerBg"
              style={{ aspectRatio: '1.6 / 1' }}
              layers={[
                {
                  speed: -20,
                  children: (
                    <video
                      className="video"
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                      muted
                      src={require("../../assets/video.mp4")}
                    />
                  ),
                },
              ]}
            />


          </ParallaxProvider>


          
          <div className="container">
            <div className="textContainer">
                <div className="h_text_container" style={{ float: "left"}}>
                  <span className="h_text" style={{ marginRight: 15}}>Solve</span>  
                  <span className="h_text">Hard</span> 
                  <div style={{display: "block"}}>
                    <span className="h_text">Climate</span>  
                  </div>
                  <div style={{display: "block"}}>
                    <span className="h_text">Problems</span> 
                  </div>
                </div> 
            </div>

            <div className="descContainer">
                  <div className="d_text">
                  We partner with scientists, engineers and operators to build deeptech
                  startups that slash emissions, remove carbon, and cool the planet.
                  </div>
            </div> 

            <div className="button_container">
              <button className="white-button">Apply now</button>
            </div>
            
          </div>
          
      </div>

    </div>
  )
}

export default VideoHeader;
