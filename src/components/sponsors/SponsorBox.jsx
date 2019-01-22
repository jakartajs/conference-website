/* eslint-disable global-require, import/no-dynamic-require */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import classnames from 'classnames';

const SponsorBox = ({ node }) => (
  <Fragment>
    <SponsorItem
      className={classnames(node.type)}
      href={node.url}
      title={node.name}
      logo={node.logo}
    />
  </Fragment>
);

SponsorBox.propTypes = {
  node: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    logo: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default SponsorBox;

const SponsorItem = styled('a')`
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 25px;
  flex-shrink: 0;
  background: transparent no-repeat 50% / contain;
  background-origin: content-box;
  background-image: ${props => (props.logo ? `url('/images/sponsors/${props.logo}')` : null)};

  &.platinum {
    height: 180px;
    width: 290px;
  }

  &.silver {
    height: 130px;
    width: 210px;
  }
`;
