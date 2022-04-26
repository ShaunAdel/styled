import React from 'react';
import styled from 'styled-components';
import { setupBorder } from '../utils';

const RandomComponent = ({ title }) => {
  return (
    <Wrapper>
      {' '}
      <h1>{title}</h1>
      <div className='important'>this is important message</div>
      <div className='box'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    color: green;
  }
  .important {
    color: blue;
  }
  .box {
    height: 10px;
    border: ${setupBorder({ width: 5, type: 'solid', color: 'green' })};
  }
`;

export default RandomComponent;
