import styled from 'styled-components';
import AiVid from './assets/AiVid.mp4';
import background from './assets/background.mp4';
import './SecondSection.css'


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 75%;
  height: 100vh;
  overflow: hidden;
  background: url(${background}) no-repeat;
  background-size: cover;
  animation: backgroundTransition 10s ease-in-out;
`;

const GridItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  height: 200px;
  width: 700px;
`;

const SecondSection = () => {
  return (
    <GridContainer id="SecondSection">
      <video
        className="background"
        src={background}
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 1000,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <GridItem style={{ overflow: 'hidden', borderRadius: '10px' }}>
        <video
          width="100%"
          height="100%"
          controls
          autoPlay
          loop
          muted
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '10px',
          }}
        >
          <source src={AiVid} type="video/mp4" />
        </video>
      </GridItem>
      <GridItem>ai</GridItem>
      <GridItem>AI</GridItem>
      <GridItem>AI</GridItem>
      <GridItem>ai</GridItem>
      <GridItem>ai</GridItem>
    </GridContainer>
  );
};

export default SecondSection;
