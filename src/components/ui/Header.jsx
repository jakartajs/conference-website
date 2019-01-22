import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';

import Logo from './Logo';
import Container from './Container';

/** @type {React.SFC} */
const Header = () => (
  <Root>
    <Inner>
      <HeaderLink to="/" href="/">
        <Logo transparent foreground="white" height={50} />
      </HeaderLink>
      <HeaderNav>
        <Link to="/" href="/">
          One link
        </Link>
        <Link to="/" href="/">
          Two link
        </Link>
        <Link to="/" href="/">
          Three link
        </Link>
        <Link to="/" href="/">
          Four link
        </Link>
      </HeaderNav>
    </Inner>
  </Root>
);

export default Header;

const Root = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props => props.theme.pxSizes.heights.header}px;
  padding: 0.5rem 1.5rem;
  background: ${props => props.theme.colors.brand};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: none;
  z-index: 10;
`;

const Inner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const HeaderLink = styled(Link)`
  display: flex;
  justify-content: center;
  height: 100%;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
`;

const HeaderNav = styled.nav`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  font-weight: 300;

  a {
    color: ${props => props.theme.colors.white};
    font-size: 0.85rem;
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      font-size: 0.9rem;
      margin-right: 1.5rem;
    }
  }
`;
