import logo from './logo.svg';
import './App.css';
import Header from './components/navigation';
import VideoBackground from './components/video_background';
import CompanySection from './components/company_section';
import { ParallaxBanner, Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Footer from './components/footer';
import Newsletter from './components/newsletter';
import VideoContent from './components/video_content';
import VideoHeader from './components/video_header';


function App() {
  return (
    <div className="App">
      <Header />

      <ParallaxProvider>
        <ParallaxBanner
          style={{ height: "80vh" }}
          layers={[
            {
              children: (
                <VideoHeader />
              ),
              amount: 0.5,
              speed: -20
            }
          ]}>
          
        </ParallaxBanner>
        <Parallax
          className="your-class"
          style={{height: "100vh"}}
          translateY={[
            '50%',
            '-50%'
          ]}>
          <CompanySection />
        </Parallax>
      </ParallaxProvider>



        {/* <ParallaxProvider>
          <ParallaxBanner
            className="videoContainer"
            
            layers={[
              {
                // image: imgSrc2,
                speed: -20,
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
              <VideoContent />
            </div>
          </ParallaxBanner>
          
          <CompanySection />
          
        </ParallaxProvider> */}
      
    </div>
  );
}

export default App;
