import './App.css';
import Header from './components/navigation';
import CompanySection from './components/company_section';
import { ParallaxBanner, Parallax, ParallaxProvider } from 'react-scroll-parallax'
import VideoHeader from './components/video_header';


function App() {
  return (
    <div className="App">
      <Header />

      <ParallaxProvider>
        <ParallaxBanner
          style={{ height: "100vh", zIndex: 0, position:"relative" }}
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
          speed={-40}
          style={{height: "100vh"}}
          translateY={[
            '50%',
            '-50%'
          ]}>
          <CompanySection />
        </Parallax>
      </ParallaxProvider>

    </div>
  );
}

export default App;
