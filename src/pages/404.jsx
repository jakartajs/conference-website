import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../components/layout/DefaultLayout';
import Page from '../components/layout/Page';

const NotFoundPage = () => (
  <DefaultLayout>
    <Page layout="not-found">
      <p>
        <code>res.status(404).send(&apos;Cannot find this page.&apos;)</code>
      </p>
    </Page>
  </DefaultLayout>
);

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
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
  }
`;
