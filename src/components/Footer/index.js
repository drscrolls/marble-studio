import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./style.css";
import VideoBackground from '../VideoBackground';

const Footer = () => {
  return (
    <div className="conclusionContainer">
      <div>
        <ParallaxBanner
          className="videoContainer"
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

            <div className="banner_content__K70EO">
              <h1 className="hm-50 hd-140 white banner_title__VZ4WV">
                <span>
                  <span className="AnimatedText_wrapper__h46D1">
                    <span >Ready</span>
                    <span>
                    </span>
                  </span>
                  <span className="AnimatedText_wrapper__h46D1">
                    <span >to</span>
                    <span>
                    </span>
                  </span>
                  <span className="AnimatedText_wrapper__h46D1" >
                    <span >Work</span>
                    <span> </span>
                  </span>
                  <span className="AnimatedText_wrapper__h46D1" >
                    <span >on</span>
                    <span> </span>
                  </span>
                  <span className="AnimatedText_wrapper__h46D1" >
                    <span >the</span>
                    <span> </span>
                  </span>
                  <span className="AnimatedText_wrapper__h46D1" >
                    <span >Biggest</span>
                    <span> </span>
                  </span>
                  <span className="AnimatedText_wrapper__h46D1" >
                    <span >Problem</span>
                    <span> </span>
                  </span>
                  <span className="AnimatedText_wrapper__h46D1" >
                    <span >of</span>
                    <span> </span>
                  </span>
                  <span className="AnimatedText_wrapper__h46D1" >
                    <span >all</span>
                    <span> </span>
                  </span>
                  <span className="AnimatedText_wrapper__h46D1" >
                    <span >Time?</span>
                    <span> </span>
                  </span>
                </span>
              </h1>
              <p className="pm-16 hd-20 white banner_description__c2HOj">We are freaked out about climate change — but we are optimists. With the right people, building the right solutions, we can get to net zero in time. Reshape entire industries. And cool the planet.
                This decade is the inflection point. What are you waiting for?
              </p>
              <a className="button_btn__EuPxb button_rounded__Aad7d label banner_cta__X7tTd" rel="noopener noreferrer" target="_blank" href="https://marblestudio.typeform.com/to/JJsTUSKk#opparea=openapp">
                Apply now
                <svg width="11" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m6.143 9 4-4-4-4M10.143 5H1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>




          </div>
        </ParallaxBanner>
      </div>
    </div>
  )
}

export default Footer;
