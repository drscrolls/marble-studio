import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import "./style.css";

const VideoBackground = () => {
  return (
    <div>

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


          
      </div>


      <video
          className="video"
          autoPlay
          loop
          playsInline
          preload="auto"
          muted
          src={require("../../assets/video.mp4")}
        />
    </div>
  )
}

export default VideoBackground;
