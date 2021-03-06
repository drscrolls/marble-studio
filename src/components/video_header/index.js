import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./style.css";
import WhiteButton from '../white_button';
import ArrowDownIconButton from '../arrow_down_icon_button';
import Header from '../navigation';

const VideoHeader = () => {
  return (
    <div className="mainHeaderContainer">
      
      <div className="videoContainer">
        <ParallaxProvider>
          <ParallaxBanner
            className="bannerBg"
            style={{ aspectRatio: '3 / 1' }}
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
            <Container>
              <Row>
                <Col>
                  <span className="h_text" style={{ marginRight: 15 }}>Solve</span>
                  <span className="h_text">Hard</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="h_text" style={{ marginRight: 15 }}>Climate</span>
                  <span className="h_text">Problems</span>
                </Col>
              </Row>
              
              <Row>
                <Col>
                  <div className="descContainer">
                    <div className="d_text">
                      We partner with scientists, engineers and operators to build deeptech
                      startups that slash emissions, remove carbon, and cool the planet.
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{marginTop: 30, float: "left"}}>
                    <WhiteButton />
                  </div>

                  {/* <div style={{marginTop: 30, float: "right"}}>
                    <ArrowDownIconButton />
                  </div> */}
                </Col>
              </Row>
            </Container>
            </div>
          </div>
          
        </div>

        <div className="arrowDownButtonClass">
            <ArrowDownIconButton />
          </div>
      </div>
    </div>
  )
}

export default VideoHeader;
