import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WhiteButton from '../white_button';
import "./style.css";

const logoWhite = require("../../assets/logo-white.png");

const Header = () => {
  return (
    <div className="navContainer">
      <div className="nav">
        <Container style={{maxWidth: '100%'}}>
          <Row>
            <Col className="col-3">
              <div className="navLeft">
                <div className="logoContainer">
                  <img className="logo" src={logoWhite} />
                </div>
              </div>
            </Col>
            <Col>
              <div className="navRight" style={{marginRight: 0}}>
                <Container style={{margin: 0}}>
                  <Row>
                    <Col>
                      <a href="#">ABOUT</a>
                    </Col>
                    <Col>
                      <a href="#">HOW IT WORKS</a>
                    </Col>
                    <Col>
                      <a href="#">WHAT WE LOOK FOR</a>
                    </Col>
                    <Col>
                      <a href="#">
                        <WhiteButton />
                      </a>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default Header;
