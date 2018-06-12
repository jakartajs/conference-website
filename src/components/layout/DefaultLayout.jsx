import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const DefaultLayout = ({ children }) => <Root>{children}</Root>;

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;

const Root = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  opacity: 1;
  transition: opacity 0.3s;
`;
