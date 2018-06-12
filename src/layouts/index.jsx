import React from 'react';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'typeface-roboto';
import '../styles/globals';
import theme from '../utils/theme';

import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import SponsorsSection from '../components/sponsors/SponsorsSection';

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <LayoutRoot>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
      <SponsorsSection sponsors={data.sponsors} />
      <Footer siteName={data.site.siteMetadata.title} />
    </LayoutRoot>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default Layout;

const LayoutRoot = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    sponsors: allSponsorsJson {
      edges {
        node {
          name
          type
          logo
          url
        }
      }
    }
  }
`;
