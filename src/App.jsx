// import logo from './logo.svg';
import Header from './components/Header';
import BackgroundUI from './components/BackgroundUI';
import './App.css';
import SlideShow from './components/SlideShow';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';
import Reward from './components/Reward';

function App() {
  return (
    <div className="bg-gray-100 py-12">
        <Header />
        <BackgroundUI/>
        <SlideShow/>
        <Reward />
        <VideoPlayer />
        <Footer />
    </div>
  );
}

export default App;
