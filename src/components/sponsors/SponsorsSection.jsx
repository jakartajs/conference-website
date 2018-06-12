import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import SectionHeading from '../ui/SectionHeading';
import SponsorBox from './SponsorBox';

const renderSection = (edges, type) => {
  const filtered = edges.filter(({ node }) => node.type === type.toLowerCase());

  return filtered.length !== 0 ? (
    <SponsorList>
      <SponsorHeading>{type}</SponsorHeading>
      {filtered.map(({ node }) => <SponsorBox key={node.name} node={node} />)}
    </SponsorList>
  ) : null;
};

const SponsorsSection = ({ sponsors }) => (
  <Root>
    <SectionHeading title="Sponsors" color="dark" />
    {renderSection(sponsors.edges, 'Platinum')}
    {renderSection(sponsors.edges, 'Silver')}
  </Root>
);

SponsorsSection.propTypes = {
  sponsors: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          name: PropTypes.string,
          type: PropTypes.string,
          logo: PropTypes.string,
          url: PropTypes.string,
        }),
      })
    ),
  }).isRequired,
};

export default SponsorsSection;

const Root = styled('section')`
  padding: 2.5rem 1.5rem;
`;

const SponsorHeading = styled('h2')`
  flex: 1 0 100%;
  margin-top: 2.5rem;
  font-weight: 300;
  text-align: center;
`;

const SponsorList = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;
