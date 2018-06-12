import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Page = ({ children, layout }) => (
  <Root className={classnames(layout)}>
    <div className="inner">{children}</div>
  </Root>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.oneOf(['home', 'page', 'about', 'speaker', 'not-found']),
};

Page.defaultProps = {
  layout: null,
};

export default Page;

const Root = styled.article`
  flex: 1 1 auto;
  padding-top: ${props => props.theme.pxSizes.heights.header}px;
  background: ${props => props.theme.colors.body};
  color: ${props => props.theme.colors.lighter};

  & .inner {
    padding: 1.5rem;
  }

  a {
    color: ${props => props.theme.colors.background};
  }

  b,
  strong {
    color: ${props => props.theme.colors.background};
  }

  &.home {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    background: ${props => props.theme.colors.brand};

    & .inner {
      display: flex;
      align-items: center;
      flex: 1 1 auto;
      padding-top: 3rem;
      padding-bottom: 5rem;
      min-height: ${props => `calc(100vh - ${props.theme.pxSizes.heights.header}px)`};
    }

    a {
      border-bottom: 2px solid ${props => props.theme.colors.background};

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }

  &.about,
  &.page,
  &.speaker {
    & .inner {
      max-width: ${props => props.theme.pxSizes.widths.md}px;
      margin: 0 auto;
      padding-bottom: 3rem;
      line-height: 1.75;
      font-weight: 300;

      @media (min-width: ${props => props.theme.pxSizes.breakpoints.lg}px) {
        max-width: ${props => props.theme.pxSizes.widths.lg}px;
      }

      @media (min-width: ${props => props.theme.pxSizes.breakpoints.xl}px) {
        font-size: 20px;
      }
    }
  }

  &.speaker {
    & .inner {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${props => props.theme.colors.background};
        font-weight: 300;
      }
    }
  }

  &.not-found {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 100vh;

    & .inner {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex: 1 1 auto;
      font-size: ${props => props.theme.emSizes.fontSizes.h4}rem;
    }
  }
`;
