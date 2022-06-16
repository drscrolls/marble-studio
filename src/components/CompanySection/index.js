import React from 'react'
import { ParallaxBanner, ParallaxProvider, Parallax } from 'react-scroll-parallax'
import AboutSection from '../AboutSection';
import ConclusionSection from '../ConclusionSection';
import MoreInfoSection from '../MoreInfoSection';
import "./style.css";

const CompanySection = () => {
  return (
    <div className="companyContainer">

      <Parallax
        className="Parallax-module__parallax--skrA3"
        translateY={[
          '50%',
          '-50%'
        ]}>
        <AboutSection />
        <MoreInfoSection />
        <ConclusionSection />
      </Parallax>
    </div>
  )
}

export default CompanySection;
