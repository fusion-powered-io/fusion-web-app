import React from "react";
import { Fade } from "react-awesome-reveal";

interface LeftSectionProps {}

const LeftSection: React.FC<LeftSectionProps> = () => {
  return (
    <section id="LeftSection" className="left-section">
      <h1>
        <Fade direction="down" damping={0.2}>
          FUSION POWERED.IO
        </Fade>
      </h1>
      <h2>
        <Fade>quality above quantity</Fade>
      </h2>
      <h3>
        <Fade>something something something </Fade>
      </h3>
      <h3>
        <Fade>something something something </Fade>
      </h3>
      <h3>
        <Fade direction="up">something something something </Fade>
      </h3>
    </section>
  );
};

export default LeftSection;
