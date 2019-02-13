import React from "react"
// TODO: this breaks builds because it's client-side, how to fix?
// import sr from '../components/scrollreveal'

import styled from 'styled-components'

import { Container, Hexagon, StyledLink } from '../framework'

import SEO from "../components/seo"

const PagesContainer = styled.div`
  
`

const PortfolioSection = styled.div`
  margin: 4px;
`

const TechContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 80vw;
`

const Icon = styled.i`
  z-index: 2
`

const disperse = (e) => {
  console.log(e.target)
}

const IndexPage = () => {
  // sr.reveal('div[class^="Hexagon-"], div[class*=" Hexagon-"]', {interval: 600})
  return (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <h1 style={{textAlign: 'center'}}>distant blue software</h1>
      <p>we build awesome things</p>
      <PagesContainer>
        <PortfolioSection><StyledLink to="/buttonmaash/">buttonmaash</StyledLink></PortfolioSection>
        {/*<PortfolioSection><StyledLink to="/hockeycompass/">hockeycompass</StyledLink></PortfolioSection>*/}
        <PortfolioSection><StyledLink to="/phrasemag/">PHRASE magazine</StyledLink></PortfolioSection>
        <PortfolioSection><StyledLink to="/subtrack/">subtrack</StyledLink></PortfolioSection>
        <PortfolioSection><StyledLink to="/orderr/">orderr.co</StyledLink></PortfolioSection>
      </PagesContainer>
      {/*<Container>
        <p>we use cool tech</p>
        <TechContainer>
          <Hexagon time={Math.random() * 5} onClick={disperse}><Icon className='fab fa-node-js'></Icon></Hexagon>
          <Hexagon time={Math.random() * 5} onClick={disperse}><Icon className="fab fa-react"></Icon></Hexagon>
          <Hexagon time={Math.random() * 5} onClick={disperse}><Icon className="fas fa-terminal"></Icon></Hexagon>
          <Hexagon time={Math.random() * 5} onClick={disperse}><Icon className="fas fa-code-branch"></Icon></Hexagon>
          <Hexagon time={Math.random() * 5} onClick={disperse}><Icon className="fab fa-vuejs"></Icon></Hexagon>
          <Hexagon time={Math.random() * 5} onClick={disperse}><Icon className="fas fa-drafting-compass"></Icon></Hexagon>
        </TechContainer>
      </Container>*/}
    </Container>
  </>
)}

export default IndexPage
