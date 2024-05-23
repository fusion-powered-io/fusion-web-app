import React from 'react';
import styled from 'styled-components';

const ThirdSectionContainer = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  text-align: center;
  position: absolute;
  top: 300%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ThirdSection = () => {
  return (
    <ThirdSectionContainer>
      <h2>This is the Third Section</h2>
    </ThirdSectionContainer>
  );
};

export default ThirdSection;