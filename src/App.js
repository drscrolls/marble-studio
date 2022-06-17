import logo from './logo.svg';
import './App.css';
import Header from './components/Navigation';
import VideoHeader from './components/VideoHeader';
import VideoBackground from './components/VideoBackground';
import CompanySection from './components/CompanySection';
import { ParallaxBanner, Parallax, ParallaxProvider } from 'react-scroll-parallax'


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
