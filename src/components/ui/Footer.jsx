import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';

/**
 * @typedef {Object} FooterProps
 * @property {string} siteName
 */

/** @type {React.SFC<FooterProps>} */
const Footer = ({ siteName }) => (
  <Root>
    <div>
      <p>&copy; 2018 {siteName}</p>
    </div>
    <FooterNav>
      <FooterNavLinks>
        <li>Code of Conduct</li>
        <li>
          <Link to="/" href="/">
            Sponsor Interest
          </Link>
        </li>
        <li>Contact Us</li>
      </FooterNavLinks>
    </FooterNav>
  </Root>
);

Footer.propTypes = {
  siteName: PropTypes.string.isRequired,
};

export default Footer;

const Root = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background: ${props => props.theme.colors.body};
  color: ${props => props.theme.colors.lighter};
  font-weight: 300;
  text-align: center;

  p {
    margin: 0;
  }

  @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
    flex-direction: row;
    text-align: left;
  }
`;

const FooterNav = styled.nav`
  flex: 1 1 auto;
  margin-top: 1rem;

  @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
    margin-top: 0;
    margin-left: 1.5rem;
  }
`;

const FooterNavLinks = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style-type: none;

  li {
    margin: 0.5rem 0;

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      display: inline-block;
      margin: 0;

      &:not(:first-child) {
        margin-left: 0.5rem;

        &:before {
          content: '|';

          margin-right: 0.5rem;
        }
      }
    }
  }
`;
