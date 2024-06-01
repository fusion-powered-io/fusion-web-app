import AiVid from './assets/AiVid.mp4';
import background from './assets/background.mp4';
import './SecondSection.css';


const SecondSection = () =>
    <div id="SecondSection">
        <Background/>
        <div className="grid-item">
            <video
                width="100%"
                height="100%"
                controls
                autoPlay
                loop
                muted
            >
                <source src={AiVid} type="video/mp4"/>
            </video>
        </div>
        <div className="grid-item">ai</div>
        <div className="grid-item">AI</div>
        <div className="grid-item">AI</div>
        <div className="grid-item">ai</div>
        <div className="grid-item">ai</div>
    </div>

const Background = () =>
    <video
        className="background"
        src={background}
        autoPlay
        loop
        muted
    />

export default SecondSection;
