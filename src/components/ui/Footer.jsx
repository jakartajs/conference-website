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
  flex-direction: row;
  padding: 0.5rem 1.5rem;
  background: ${props => props.theme.colors.body};
  color: ${props => props.theme.colors.lighter};
  font-weight: 300;

  p {
    margin: 0;
  }
`;

const FooterNav = styled.nav`
  flex: 1 1 auto;
  margin-left: 1.5rem;
`;

const FooterNavLinks = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style-type: none;

  li {
    display: inline-block;

    &:not(:first-child) {
      margin-left: 0.5rem;

      &:before {
        content: '|';

        margin-right: 0.5rem;
      }
    }
  }
`;
