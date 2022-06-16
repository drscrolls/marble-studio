import logo from './logo.svg';
import './App.css';
import Header from './components/Navigation';
import VideoHeader from './components/VideoHeader';
import VideoBackground from './components/VideoBackground';
import CompanySection from './components/CompanySection';


function App() {
  return (
    <div className="App">
      <Header />
      <VideoHeader />
      {/* <VideoBackground /> */}
      <CompanySection />

      
      
    </div>
  );
}

export default App;
