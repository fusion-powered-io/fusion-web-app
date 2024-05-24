import NavBar from "./components/nav-bar/NavBar.tsx";
import LeftSection from "./components/section-left/LeftSection.tsx";
import SecondSection from './components/section-second/SecondSection.tsx';
import background2 from "./assets/background2.mp4";
import ThirdSection from "./components/section-third/ThirdSection.tsx";
import "./App.css";

const App = () =>
    <div className="main">
        <NavBar/>
        <div className="video-container">
            <video className="background2" src={background2} autoPlay loop muted/>
        </div>
        <div className="sections-container">
            <LeftSection/>
            <section className="middle-section"/>
            <SecondSection/>
            <section className="right-section">
                <h1>What we can do</h1>
            </section>
            <section className="cando">
                <h1>AI</h1>
            </section>
            <ThirdSection/>
        </div>
    </div>

export default App;
