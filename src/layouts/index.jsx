import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'typeface-roboto';
import 'modern-normalize';
import { GlobalStyles } from '../styles/reset';
import theme from '../utils/theme';

import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import SponsorsSection from '../components/sponsors/SponsorsSection';

const IndexLayout = ({ children }) => (
  <StaticQuery query={query}>
    {data => (
      <ThemeProvider theme={theme}>
        <LayoutRoot>
          <Global styles={GlobalStyles} />
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <SponsorsSection sponsors={data.sponsors} />
          <Footer siteName={data.site.siteMetadata.author.name} />
        </LayoutRoot>
      </ThemeProvider>
    )}
  </StaticQuery>
);

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default IndexLayout;

const LayoutRoot = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        datetime
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
