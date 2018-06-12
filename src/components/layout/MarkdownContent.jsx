import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const MarkdownContent = ({ html }) => (
  <Root
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
);

MarkdownContent.propTypes = {
  html: PropTypes.string.isRequired,
};

export default MarkdownContent;

const Root = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.background};
    font-weight: 300;
  }

  b,
  strong {
    font-weight: 500;
  }

  a {
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    color: ${props => props.theme.colors.background};
    font-weight: 400;
    border-bottom: 4px solid ${props => props.theme.colors.green};
  }

  figcaption {
    a {
      border-bottom: none;
      color: ${props => props.theme.colors.green};

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;
