import React from 'react'
import { ParallaxBanner, ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./style.css";

const VideoContent = () => {
  return (
    <div className="container">
      <div className="textContainer">
        <div className="h_text_container" style={{ float: "left" }}>
          
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
                <div className="button_container" style={{marginTop: 20}}>
                  <button className="white-button">Apply now</button>
                </div>
              </Col>
            </Row>
          </Container>

        </div>
      </div>

      


    </div>
  )
}

export default VideoContent;
