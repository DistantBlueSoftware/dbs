import React from 'react';
import { LinkButton } from '../framework';
import TechContainer from '../components/TechContainer';

import SEO from '../components/seo';

const HockeyCompass = () => (
  <>
    <SEO title="Hockey Compass" />
    <h1>Hockey Compass</h1>
    <p>
      Maks came to us with a vision of connecting local pickup hockey players to
      open games. We designed and built the experience from the ground up to be
      lightning-fast and simple to use.
    </p>
    <TechContainer tools={['react', 'node', 'paypal']} />
    <LinkButton href="https://hockeycompass.com" target="_blank">
      GO TO THERE
    </LinkButton>
  </>
);

export default HockeyCompass;
