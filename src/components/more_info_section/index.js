import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import {Container, Row, Col, Image} from 'react-bootstrap'
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Dots from '../dots';

const MoreInfoSection = () => {
  return (
    <div className="moreInfoContainer">
      <div>
          <Container>
            <Row xs={1} md={1} lg={2} style={{marginBottom: 200}}>
            <Col>
                <Dots />
                <div className="m_title">
                  Help Us Reverse Climate Change
                </div>

              </Col>
              <Col>
                
                <div className="m_desc">
                  <p>We are assembling a network of leading experts, partners and top talent to support our Founders in their mission to heal the planet.</p>
                </div>
              </Col>
            </Row>





            <Row xs={1} md={1} lg={2} style={{borderTop: '1px solid #222', paddingTop: 25, marginTop: 20}}>
             <Col>
                <div className="row" style={{float: 'left',texAlign: 'left'}}>
                  <p className="m_subtitle">Help Us Reverse Climate Change</p>
                </div>

              </Col>
              <Col>
                
                <div className="button_container" style={{float: 'right'}}>
                  <button className="gray-button">Apply now</button>
                </div>
              </Col>
            </Row>


            <Row xs={1} md={1} lg={2} style={{borderTop: '1px solid #222', paddingTop: 25, marginTop: 20}}>
             <Col>
                <div className="row subtitle" style={{float: 'left',texAlign: 'left'}}>
                  <p className="m_subtitle">Help Us Reverse Climate Change</p>
                </div>

              </Col>
              <Col>
                
                <div className="button_container" style={{float: 'right'}}>
                  <button className="gray-button">Apply now</button>
                </div>
              </Col>
            </Row>

            

            <Row xs={1} md={1} lg={2} style={{borderTop: '1px solid #222', paddingTop: 25, marginTop: 20}}>
             <Col>
                <div className="row" style={{float: 'left',texAlign: 'left'}}>
                  <p className="m_subtitle">Help Us Reverse Climate Change</p>
                </div>

              </Col>
              <Col>
                
                <div className="button_container" style={{float: 'right'}}>
                  <button className="gray-button">Apply now</button>
                </div>
              </Col>
            </Row>

            
            
          </Container>
        </div>
    </div>
  )
}

export default MoreInfoSection;
