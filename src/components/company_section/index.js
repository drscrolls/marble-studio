import React from 'react'
import { ParallaxBanner, ParallaxProvider, Parallax } from 'react-scroll-parallax'
import AboutSection from '../about';
import ConclusionSection from '../conclusion_section';
import Footer from '../footer';
import MoreInfoSection from '../more_info_section';
import Newsletter from '../newsletter';
import "./style.css";

const CompanySection = () => {
  return (
    <div className="companyContainer">

        <AboutSection />
        <MoreInfoSection />
        <ConclusionSection />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default CompanySection;
