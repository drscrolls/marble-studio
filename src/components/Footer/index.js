import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import WhiteButton from '../white_button';
import "./style.css";

const logoWhite = require("../../assets/logo-white.png");

const Footer = () => {
  return (
    <div className="footerContainer">
      <Container>
        <Row xs={1} md={2} lg={2}>
          <Col style={{marginLeft: 0, paddingLeft: 0}}>
            <div className="logoContainer">
              <img className="logo" src={logoWhite}/>
            </div>
          </Col>
          <Col>
            <Container>
              <Row>
                <Col>
                  <div className="footer_subtitle">About</div>
                  <p className="footer_link"><a href="#">How It Works</a></p>
                  <p className="footer_link"><a href="#">What We Look For</a></p>
                  <p className="footer_link"><a href="#">Contact Us</a></p>
                  <p className="footer_link"><a href="#">Careers</a></p>
                  <p className="footer_link"><a href="#">FAQs</a></p>
                </Col>

                <Col>
                  <div className="footer_subtitle">Connect</div>
                  <p className="footer_link"><a href="#">22 Rue Rene</a></p>
                  <p className="footer_link"><a href="#">Boulanger</a></p>
                  <p className="footer_link"><a href="#">Paris, France</a></p>
                  <p className="footer_link"><a href="#">&nbsp;</a></p>
                  <p className="footer_link"><a href="#">LinkedIn</a></p>
                  <p className="footer_link"><a href="#">Twitter</a></p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={2} style={{marginTop: 40}}>
          <Col className="footer_btn_container" style={{marginLeft: 0, paddingLeft: 0}}>

              <WhiteButton />

              {/* <button className="footer_white-button">
                Apply Now
                <span style={{marginLeft: 10}}>
                  <FontAwesomeIcon icon={faArrowRight} className="icon"/>
                </span>
              </button>
              &nbsp;
              <button className="footer_dark-button">
                Join Our Community
                <span style={{marginLeft: 10}}>
                  <FontAwesomeIcon icon={faArrowRight} className="icon" />
                </span>
              </button> */}
          </Col>
          <Col>
            <Container>
              <Row>
                <Col>
                  <p className="footer_link_small"><a href="#">Privacy & Terms</a></p>
                </Col>

                <Col>
                  <p className="footer_link_small">Made by <a href="#">Dr. Scrolls</a></p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
        
          

    </div>
  )
}

export default Footer;
