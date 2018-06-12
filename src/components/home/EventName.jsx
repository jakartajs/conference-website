import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const EventName = ({ title, description }) => (
  <Wrapper>
    <h1>{title}</h1>
    <p>{description}</p>
  </Wrapper>
);

EventName.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventName;

const Wrapper = styled.div`
  margin-bottom: 1rem;
  padding: 0.25em 0.5em;
  z-index: 1;
  font-size: 16px;
  background: ${props => props.theme.colors.brand};
  border: 4px solid ${props => props.theme.colors.brand};

  h1,
  p {
    margin: 0;
    line-height: 1.2;
    font-weight: 300;

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      &:after {
        content: '/';
        margin-left: 0.25em;
      }
    }
  }

  p {
    font-size: ${props => props.theme.emSizes.fontSizes.h3}rem;

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.lg}px) {
      font-size: ${props => props.theme.emSizes.fontSizes.h1}rem;
    }
  }

  @supports (display: grid) {
    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      font-size: ${props => props.theme.emSizes.fontSizes.h3}rem;
    }

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.lg}px) {
      grid-column: 2 / 4;
      grid-row: 2;
      font-size: ${props => props.theme.emSizes.fontSizes.h1}rem;
    }
  }
`;
