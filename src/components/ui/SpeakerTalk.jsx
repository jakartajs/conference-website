import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import MarkdownContent from '../layout/MarkdownContent';

const SpeakerTalk = ({ title, html }) => (
  <Root>
    <Inner>
      <Title>{title}</Title>
      <MarkdownContent html={html} />
    </Inner>
  </Root>
);

SpeakerTalk.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default SpeakerTalk;

const Root = styled.section`
  margin: 2.5rem 0 3.5rem;
`;

const Inner = styled.div`
  display: block;
  padding: 1.5rem;
  margin: 0 0.5rem;
  color: ${props => props.theme.colors.background};
  border: 4px solid ${props => props.theme.colors.border};
  box-shadow: -0.5rem 0.5rem ${props => props.theme.colors.border};

  @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
    margin: 0 0.75rem;
    box-shadow: -0.75rem 0.75rem ${props => props.theme.colors.border};
  }

  .subtitle {
    margin: 0;
    margin-top: 0.5;
    font-weight: 300;
    font-size: ${props => props.theme.emSizes.fontSizes.h3}rem;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  font-weight: 300;
`;
