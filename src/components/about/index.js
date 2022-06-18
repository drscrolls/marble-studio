import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Dots from '../dots';
import DarkButton from '../dark_button';
import "./style.css";

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
                  <p>Build A Climate</p> 
                  <p>Company</p>
                </div>

                
                <div className="a_desc">
                  <p>Over 9 months, you will work with us to uncover high-impact opportunities and shape the most promising idea into a new venture.</p>
                  <p>Receive funding, mentorship, hands-on support, access to an unparalleled pool of experts, potential co-founders and advisors.</p>
                  <p>If you succeed, we become your first investor and help you raise a seed round.</p>
                  <div style={{marginTop: 10}}>
                    <DarkButton text="HOW IT WORKS" type="gradient" />
                  </div>
                </div>

                
              </Col>
            </Row>


            <Row xs={1} md={1} lg={2} style={{marginTop: 120}}>
              <Col>
                <Dots/>
                <div className="a_title">
                  <p>Radicals</p>
                  <p>Welcome</p>
                </div>

                
                <div className="a_desc">
                  <p>Do you believe climate is the only problem worth working on?</p>
                  <p>Do you want to start building instead of just publishing?</p>
                  <p>Do you dream of founding your own company?</p>
                  <p>Find out more about the hard climate problems we want to solve and what we look for in applicants.</p>
                  <p>No prior idea required. (but if you have one and people tell you it`s crazy, we`d love to hear it)</p>
                  
                  <div style={{marginTop: 10}}>
                    <DarkButton text="HOW IT WORKS" type="gradient" />
                  </div>
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
