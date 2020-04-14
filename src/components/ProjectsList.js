import React from 'react';
import styled from 'styled-components';

import { StyledLink } from '../framework';

const ProjectsContainer = styled.div``;

const ProjectSection = styled.div`
  margin: 4px;
`;

const ProjectsList = () => {
  return (
    <ProjectsContainer>
      {/* <ProjectSection><StyledLink to="/buttonmaash/">buttonmaash</StyledLink></ProjectSection> */}
      <ProjectSection>
        <StyledLink to="/hockeycompass/">hockeycompass</StyledLink>
      </ProjectSection>
      <ProjectSection>
        <StyledLink to="/phrasemag/">PHRASE magazine</StyledLink>
      </ProjectSection>
      <ProjectSection>
        <StyledLink to="/subtrack/">subtrack</StyledLink>
      </ProjectSection>
      <ProjectSection>
        <StyledLink to="/orderr/">orderr.co</StyledLink>
      </ProjectSection>
      <ProjectSection>
        <StyledLink to="/doublenightmode/">doublenightmode</StyledLink>
      </ProjectSection>
    </ProjectsContainer>
  )
}

export default ProjectsList;