import React from 'react';
// TODO: this breaks builds because it's client-side, how to fix?
// import sr from '../components/scrollreveal'

import styled from 'styled-components';

import { Container } from '../framework';

import SEO from '../components/seo';
import TechContainer from '../components/TechContainer';
import ProjectsList from '../components/ProjectsList';

const IndexPage = () => {
  // sr.reveal('div[class^="Hexagon-"], div[class*=" Hexagon-"]', {interval: 600})
  const tools = ['react', 'node', 'terminal', 'git', 'vue', 'design'];
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <h1 style={{ textAlign: 'center' }}>distant blue software</h1>
        <p>we build awesome things</p>
        <ProjectsList />
        {/* <Container>
          <p>we use modern tech</p>
          <TechContainer
            tools={tools}
          />
        </Container> */}
      </Container>
    </>
  );
};

export default IndexPage;
