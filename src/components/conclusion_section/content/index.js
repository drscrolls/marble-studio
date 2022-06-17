import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import {Container, Row, Col, Image} from 'react-bootstrap'
import "./style.css";
import VideoBackground from '../../VideoBackground';

const ConclusionContent = () => {
  return (
    <div className="conclusionContainer">
       <div>
          <ParallaxBanner
            className="videoContainer"
            layers={[
              {
                // image: imgSrc2,
                amount: 0.5,
                children: (
                  <VideoBackground />
                ),
              }
            ]}>
              <div
                style={{
                  position: "relative",
                  color: "white"
                }}>
                i am children 1
              </div>
            </ParallaxBanner>
        </div>
    </div>
  )
}

export default ConclusionContent;
