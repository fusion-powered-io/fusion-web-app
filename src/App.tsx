import NavBar from "./components/nav-bar/NavBar.tsx";
import IntroSection from "./components/section-Intro/IntroSection.tsx";
import AboutSection from './components/section-second/SecondSection.tsx';
import background2 from "./assets/background2.mp4";
import ThirdSection from "./components/section-third/ThirdSection.tsx";
import "./App.css";

const App = () =>
    <div className="main">
        <NavBar/>
        <video className="video-container" src={background2} autoPlay loop muted/>
        <div className="sections-container">
            <IntroSection/>
            <AboutSection/>
            <ThirdSection/>
        </div>
    </div>

export default App;
