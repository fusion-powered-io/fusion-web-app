import React from 'react';
import NavBar from "./components/nav-bar/NavBar";
import IntroSection from "./components/section-Intro/IntroSection";
import AboutSection from './components/section-second/SecondSection';
import background2 from "./assets/background2.mp4";
import ThirdSection from "./components/section-third/ThirdSection";
import "./App.css";
import CustomCursor from './components/cursor/CustomCursor';


const App: React.FC = () => (
    <div className="main">
        <CustomCursor/>
        <NavBar/>
        <video className="video-container" src={background2} autoPlay loop muted/>
        <div className="sections-container">
            <IntroSection/>
            <AboutSection/>
            <ThirdSection/>
        </div>

    </div>
);

export default App;
