import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import DefaultLayout from '../components/layout/DefaultLayout';
import Page from '../components/layout/Page';
import HomepageHero from '../components/home/HomepageHero';
import EventName from '../components/home/EventName';
import EventDetails from '../components/home/EventDetails';
import HomepageAbout from '../components/home/HomepageAbout';
import HomepageCallToAction from '../components/home/HomepageCallToAction';
import Container from '../components/ui/Container';

const IndexPage = ({ data }) => (
  <DefaultLayout>
    <Page layout="home">
      <Container>
        <HomepageHero>
          <EventName
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.datetime}
          />
          <EventDetails>
            <ul>
              <li>
                <Link to="/about" href="/about">
                  About
                </Link>
              </li>
              <li>Schedule</li>
              <li>Venue</li>
              <li>
                <Link to="/speakers" href="/speakers">
                  Speakers
                </Link>
              </li>
              <li>Code of Conduct</li>
            </ul>
          </EventDetails>
          <HomepageAbout>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quisquam neque nihil
              aspernatur voluptate necessitatibus.
            </p>
            <p>
              Quae deleniti cumque cupiditate culpa architecto, amet debitis. Accusantium odit eaque
              debitis tempora deleniti et.
            </p>
          </HomepageAbout>
          <HomepageCallToAction>
            <ul>
              <li>
                <Link to="/about" href="/about">
                  Learn more
                </Link>
              </li>
              <li>
                <Link to="/" href="/">
                  Call for Submissions
                </Link>
              </li>
            </ul>
          </HomepageCallToAction>
        </HomepageHero>
      </Container>
    </Page>
  </DefaultLayout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
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
  }
`;
