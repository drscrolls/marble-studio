import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { Container, Row, Col, Image } from 'react-bootstrap'
import VideoBackground from '../video_background';
import "./style.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <Container>
        <Row xs={1} md={1} lg={2}>
          <Col>
            <div className="n_title">SIGN UP TO OUR NEWSLETTER:</div>
          </Col>
          <Col>
            <div></div>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <div className="input_container">
              <input className="input" placeholder="your@email.com" />
              <div className="button_container" >
              </div>
            </div>
          </Col>
          <Col>
            <div></div>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <div style={{float: "left", marginTop: 10}}>

              

            </div>
          </Col>
          <Col>
            <div></div>
          </Col>
        </Row>
      </Container>
        
          

    </div>
  )
}

export default Footer;
