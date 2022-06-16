import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import "./style.css";

const VideoHeader = () => {
  return (
    <div>
      <ParallaxProvider>
          <ParallaxBanner
            className="bannerBg"
            style={{ aspectRatio: '2 / 1' }}
            layers={[
              {
                image:
                  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
                speed: -20,
              },
            ]}
          />
        </ParallaxProvider>
    </div>
  )
}

export default VideoHeader;
