import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Dots from '../dots';
import DarkButton from '../dark_button';
import "./style.css";

const MoreInfoSection = () => {
  return (
    <div className="moreInfoContainer">
      <div>
          <Container style={{marginLeft: 0, marginRight: 0}}>
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





            <Row xs={1} md={1} lg={2} style={{borderTop: '1px solid #dadada', paddingTop: 25, marginTop: 20}}>
             <Col>
                <div className="row" style={{float: 'left',texAlign: 'left'}}>
                  <p className="m_subtitle">Help Us Reverse Climate Change</p>
                  <p className="m_subtitleDesc">
                    Interested in research collaborations and to refer talent?
                  </p>
                </div>

              </Col>
              <Col>
                
              <div style={{float: 'right'}}>
                <DarkButton text="LET'S TALK SCIENCE" type="gradient" />
              </div>
              </Col>
            </Row>


            <Row xs={1} md={1} lg={2} style={{borderTop: '1px solid #dadada', paddingTop: 25, marginTop: 20}}>
             <Col>
                <div className="row subtitle" style={{float: 'left',texAlign: 'left'}}>
                  <p className="m_subtitle">Corporates & Investors</p>
                  <p className="m_subtitleDesc">
                    Interested in partnering to tackle hard climate problems?
                  </p>
                </div>

              </Col>
              <Col>
                
                <div style={{float: 'right'}}>
                  <DarkButton text="LET'S TALK BUSINESS" type="gradient" />
                </div>
              </Col>
            </Row>

            

            <Row xs={1} md={1} lg={2} style={{borderTop: '1px solid #dadada', paddingTop: 25, marginTop: 20}}>
             <Col>
                <div className="row" style={{float: 'left',texAlign: 'left'}}>
                  <p className="m_subtitle">Dream Job Seekers</p>
                  <p className="m_subtitleDesc">
                    Looking for a role at Marble on the programme side?
                  </p>
                </div>

              </Col>
              <Col>
                
                <div style={{float: 'right'}}>
                  <DarkButton text="SEE OPEN VACANCIES" type="gradient" />
                </div>
              </Col>
            </Row>


            <Row xs={1} md={1} lg={2} style={{borderTop: '1px solid #dadada', paddingTop: 25, marginTop: 20}}>
             <Col>
                <div className="row" style={{float: 'left',texAlign: 'left'}}>
                  <p className="m_subtitle">Stay In Touch</p>
                  <p className="m_subtitleDesc">
                    Want to keep up to date with our work? 
                  </p>
                </div>

              </Col>
              <Col>
                
                <div style={{float: 'right'}}>
                  <DarkButton text="SIGN UP TO OUR NEWSLETTER" type="gradient" />
                </div>
              </Col>
            </Row>

            
            
          </Container>
        </div>
    </div>
  )
}

export default MoreInfoSection;
