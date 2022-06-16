import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import "./style.css";

const VideoBackground = () => {
  return (
    <div>
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
