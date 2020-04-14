import React from 'react';
import { LinkButton } from '../framework';

import SEO from '../components/seo';

const Subtrack = () => (
  <>
    <SEO title="Subtrack" />
    <h1>Subtrack</h1>
    <p>Submissions tracking for creatives.</p>
    <LinkButton href="http://submission-tracker.herokuapp.com" target="_blank">
      GO TO THERE
    </LinkButton>
  </>
);

export default Subtrack;
