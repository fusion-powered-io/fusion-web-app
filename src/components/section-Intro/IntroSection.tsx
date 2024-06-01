import {Fade} from "react-awesome-reveal";
import './IntroSection.css'

const IntroSection = () =>
    <section className="intro-section">
        <Fade direction="down" damping={0.2}>
            <h1>FUSION POWERED.IO</h1>
        </Fade>
        <Fade>
            <h2>quality above quantity</h2>
            <h3>something something something</h3>
            <h3>something something something</h3>
        </Fade>
        <Fade direction="up">
            <h3>something something something</h3>
        </Fade>
    </section>


export default IntroSection;
