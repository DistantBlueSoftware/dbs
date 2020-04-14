import React from 'react';
import styled from 'styled-components';
import { Hexagon } from '../framework';

const StyledTechContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 80vw;
`;

const Icon = styled.i`
  z-index: 2;
`;

const toolsDictionary = {
  react: {
    className: 'fab fa-react',
    alt: 'react',
  },
  node: {
    className: 'fab fa-node-js',
  },
  terminal: {
    className: 'fas fa-terminal',
  },
  git: { className: 'fas fa-code-branch' },
  vue: { className: 'fab fa-vuejs' },
  design: { className: 'fas fa-drafting-compass' },
  stripe: { className: 'fab fa-stripe' },
  paypal: { className: 'fab fa-cc-paypal' },
  ios: { className: 'fab fa-app-store-ios' },
  android: { className: 'fab fa-android' },
};

const disperse = e => {
  console.log(e.target);
};

const randomBounceInterval = () => Math.random() * 2 + 1;

const TechContainer = ({ tools }) => {
  const toolsHexagons = tools.map(t => (
    <Hexagon time={randomBounceInterval} onClick={disperse}>
      <Icon
        className={
          toolsDictionary[t] && toolsDictionary[t].className
            ? toolsDictionary[t].className
            : 'fas fa-code-branch'
        }
      ></Icon>
    </Hexagon>
  ));
  return <StyledTechContainer>{toolsHexagons}</StyledTechContainer>;
};

export default TechContainer;
