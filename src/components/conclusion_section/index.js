import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./style.css";
import VideoBackground from '../video_background';

const ConclusionSection = () => {
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
                <div>
                  <video
                    className="conclusionVideo"
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    muted
                    src={require("../../assets/conclusion_video.mp4")}
                  />
                </div>
              ),
            }
          ]}>
          <div
            style={{
              position: "relative",
              color: "white"
            }}>

            <div className="conclusion_content">
              <Container>
                <Row>
                  <Col>
                    <div className="conclusion_text">Ready to Work</div>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                    <div className="conclusion_text">on the Biggest</div>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                    <div className="conclusion_text">Problem of all</div>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                    <div className="conclusion_text">Time?</div>
                  </Col>
                </Row>
              </Container>


              <Container className="c_desc_container">
                <Row>
                  <Col>
                    <div className="conclusion_text">Ready to Work</div>
                  </Col>
                </Row>
                  
                <Row>
                  <Col>
                    <div className="conclusion_text">Time?</div>
                  </Col>
                </Row>
              </Container>

              
            </div>




          </div>
        </ParallaxBanner>
      </div>
    </div>
  )
}

export default ConclusionSection;
