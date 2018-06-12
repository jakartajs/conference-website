import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import classnames from 'classnames';

/**
 * @typedef {Object} SectionHeadingProps
 * @property {string} [className]
 * @property {string} title
 * @property {string} [color]
 */

/** @type {React.SFC<SectionHeadingPropsq>} */
const SectionHeading = ({ className, title, color }) => (
  <Root>
    <Inner className={classnames(color, className)}>
      <Title>{title}</Title>
    </Inner>
  </Root>
);

SectionHeading.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'dark', 'light']),
};

SectionHeading.defaultProps = {
  className: null,
  color: 'primary',
};

export default SectionHeading;

const Root = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

const Inner = styled.div`
  display: inline-block;
  padding: 1rem 1.5rem;
  margin: 1rem;
  color: ${props => props.theme.colors.background};
  border: 4px solid ${props => props.theme.colors.border};
  box-shadow: -0.5rem 0.5rem ${props => props.theme.colors.border};

  @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
    box-shadow: -0.75rem 0.75rem ${props => props.theme.colors.border};
  }

  &.primary {
    color: ${props => props.theme.colors.brand};
    border-color: ${props => props.theme.colors.brand};
    box-shadow: -0.5rem 0.5rem ${props => props.theme.colors.brand};

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      box-shadow: -0.75rem 0.75rem ${props => props.theme.colors.brand};
    }
  }

  &.dark {
    color: ${props => props.theme.colors.body};
    border-color: ${props => props.theme.colors.body};
    box-shadow: -0.5rem 0.5rem ${props => props.theme.colors.body};

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      box-shadow: -0.75rem 0.75rem ${props => props.theme.colors.body};
    }
  }

  &.light {
    color: ${props => props.theme.colors.background};
    border-color: ${props => props.theme.colors.background};
    box-shadow: -0.5rem 0.5rem ${props => props.theme.colors.background};

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      box-shadow: -0.75rem 0.75rem ${props => props.theme.colors.background};
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 300;
`;
