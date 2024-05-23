import React, { useState } from "react";
import NavBar from "./components/NavBar";
import LeftSection from "./components/LeftSection";
import SecondSection from './components/SecondSection';
import background2 from "./assets/Main/background2.mp4";
import ThirdSection from "./components/ThirdSection";
import "../src/App.css";


const App: React.FC = () => {
  const [showText, setShowText] = useState<boolean>(false);
  const [showText2, setShowText2] = useState<boolean>(false);
  const [showText3, setShowShowText3] = useState<boolean>(false);

  const handleAboutUsClick = () => {
    setShowText(!showText);
  };

  const handleContactClick = () => {
    setShowText2(!showText2);
  };

  const handleSomethingClick = () => {
    setShowShowText3(!showText3);
  };

  return (
    <div className="main">
   <NavBar  
  onAboutUsClick={() => setShowText(!showText)}
  onContactClick={() => setShowText2(!showText2)}
  onSomethingClick={() => setShowShowText3(!showText3)}
/>
      <div className="video-container">
        <video className="background2" src={background2} autoPlay loop muted />
      </div>
      <div className="sections-container">
        <LeftSection />
        <section className="middle-section">
          <h1></h1>
        </section>
        <SecondSection />
        <section className="right-section">
          <h1>What we can do</h1>
        </section>
        <section className="cando">
          <h1>AI</h1> 
        </section>
        <ThirdSection />
      </div>
    </div>
  );
};

export default App;