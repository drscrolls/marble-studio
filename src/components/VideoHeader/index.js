import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import "./style.css";

const VideoHeader = () => {
  return (
    <div className="mainHeaderContainer">
      <div className="videoContainer">
        <ParallaxProvider>
          <ParallaxBanner
            className="bannerBg"
            style={{ aspectRatio: '2 / 1' }}
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

      <div className="headerTextContainer">
        <div className="textContainer">
          <div className="">
            <div className="h_text_container">
              <span>
                <span className="h_text">Solve</span>
                <span>

                </span>
              </span>
              <span>
                <span>Hard</span>
                <span> </span>
              </span>
              <br />
              <span>
                <span>Climate</span>
                <span> </span>
              </span>
              <span>
                <span>Problems</span>
                <span>
                </span>
              </span>
            </div>
          </div>
          <p>We partner with scientists, engineers and operators to build deeptech startups that slash emissions, remove carbon, and cool the planet.</p>
          <div> <a rel="noopener noreferrer" target="_blank" href="https://marblestudio.typeform.com/to/JJsTUSKk#opparea=openapp">Apply Now
            <svg width="11" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.143 9 4-4-4-4M10.143 5H1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a> </div>
        </div>
      </div>
    </div>
  )
}

export default VideoHeader;
