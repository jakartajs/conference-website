import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const PageTitle = ({ title, subtitle }) => (
  <Root>
    <Inner>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Inner>
  </Root>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

PageTitle.defaultProps = {
  subtitle: null,
};

export default PageTitle;

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
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 300;
`;

const Subtitle = styled.p`
  margin: 0;
  margin-top: 0.5;
  font-weight: 300;
  font-size: ${props => props.theme.emSizes.fontSizes.h3}rem;
`;
