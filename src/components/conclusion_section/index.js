import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./style.css";
import WhiteButton from '../white_button';

const ConclusionSection = () => {
  return (
    <div className="conclusionContainer">
      <div>
        <ParallaxBanner
        style={{height: "100vh" }}
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
              <Container className="c_text_container">
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
                <Row style={{float: 'right'}}>
                  <Container>
                    <Row>
                      <Col>
                        <p style={{float: 'left'}} className="c_desc_txt">We are freaked out about climate change — but we are optimists. With the right people, building the right solutions, we can get to net zero in time. Reshape entire industries. And cool the planet.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p style={{float: 'left'}} className="c_desc_txt">This decade is the inflection point. What are you waiting for?</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div style={{float: 'left', marginLeft: 20}}>
                          <WhiteButton />
                        </div>
                        
                      </Col>
                    </Row>
                  </Container>
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
