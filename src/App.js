import logo from './logo.svg';
import './App.css';
import Header from './components/navigation';
import VideoHeader from './components/video_header';
import VideoBackground from './components/video_background';
import CompanySection from './components/company_section';
import { ParallaxBanner, Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Footer from './components/footer';
import Newsletter from './components/newsletter';


function App() {
  return (
    <div className="App">
      <Header />
        <ParallaxProvider>
          <ParallaxBanner
            className="videoContainer"
            layers={[
              {
                // image: imgSrc2,
                amount: 0.5,
                children: (
                  <VideoBackground />
                ),
              }
            ]}
          >
            <div
              style={{
                position: "relative",
                color: "white"
              }}
            >
              i am children 1
            </div>
          </ParallaxBanner>
          <ParallaxBanner
            className="your-class"
            layers={[
              {
                // image: imgSrc1,
                amount: 0.3,
              }
            ]}
          >
            <div
              style={{
                position: "relative",
                color: "white"
              }}
            >
              <CompanySection />
            </div>
          </ParallaxBanner>
        </ParallaxProvider>
      
    </div>
  );
}

export default App;
