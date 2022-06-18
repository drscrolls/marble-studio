import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./style.css";
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowIconButton from '../arrow_icon_button';

const Newsletter = () => {
  return (
    <div className="newsLetterContainer">
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
                <ArrowIconButton />
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

              <FormGroup>
                <FormControlLabel
                  sx={{
                    color: '#444',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                  }} 
                  control={
                  <Checkbox 
                  size="small" 
                  sx={{
                    color: grey[600],
                    margin: 0,
                    padding: 0,
                    paddingRight: 1,
                    '&.Mui-checked': {
                      color: grey[600],
                    },
                  }} />} 
                  label="I have read and accepted the Terms and Conditions" />
              </FormGroup>


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

export default Newsletter;
