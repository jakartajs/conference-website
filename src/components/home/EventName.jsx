import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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
  margin-bottom: 2.5rem;
  margin-left: 1.75rem;
  padding: 0.25em 0.5em;
  z-index: 1;
  font-size: 16px;
  border: 4px solid ${props => props.theme.colors.border};
  padding: 0.5rem 0.75rem;
  box-shadow: -0.75rem 0.75rem ${props => props.theme.colors.border};
  text-align: center;

  @supports (display: grid) {
    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      margin-bottom: 1rem;
      margin-left: 0;
      background: ${props => props.theme.colors.brand};
      border: none;
      box-shadow: none;
      text-align: left;
    }
  }

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

  h1 {
    font-size: ${props => props.theme.emSizes.fontSizes.h2}rem;

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.lg}px) {
      font-size: ${props => props.theme.emSizes.fontSizes.h1}rem;
    }
  }

  p {
    font-size: ${props => props.theme.emSizes.fontSizes.h4}rem;

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
