import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import {Container, Row, Col, Image} from 'react-bootstrap'
import "./style.css";
import Dots from '../dots';

const AboutSection = () => {
  return (
    <section className="aboutContainer">
        <div>
          <Container>
            <Row xs={1} md={1} lg={2}>
              <Col>
                <div className="imageContainer">
                  <img className="img" src={require("../../assets/globe.png")} />
                </div>
              </Col>
              <Col>
                <Dots/>
                <div className="a_title">
                  Build A Climate Company
                </div>

                
                <div className="a_desc">
                  <p>Over 9 months, you will work with us to uncover high-impact opportunities and shape the most promising idea into a new venture.</p>
                  <p>Receive funding, mentorship, hands-on support, access to an unparalleled pool of experts, potential co-founders and advisors.</p>
                  <p>If you succeed, we become your first investor and help you raise a seed round.</p>
                </div>

                    
                <div className="button_container">
                  <button className="gray-button">Apply now</button>
                </div>
                
              </Col>
            </Row>


            <Row xs={1} md={1} lg={2} style={{marginTop: 120}}>
              <Col>
              <span class="dots_dots__nGOi0" aria-hidden="true"></span>
                <div className="a_title">
                  Build A Climate Company
                </div>

                
                <div className="a_desc">
                  <p>Over 9 months, you will work with us to uncover high-impact opportunities and shape the most promising idea into a new venture.</p>
                  <p>Receive funding, mentorship, hands-on support, access to an unparalleled pool of experts, potential co-founders and advisors.</p>
                  <p>If you succeed, we become your first investor and help you raise a seed round.</p>
                </div>

                    
                <div className="button_container">
                  <button className="gray-button">Apply now</button>
                </div>
                
              </Col>
              <Col>
                <div className="imageContainer">
                  <img className="img" src={require("../../assets/globe.png")} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </section>
  )
}

export default AboutSection;
