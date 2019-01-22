import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import IndexLayout from '../../layouts';

const DefaultLayout = ({ children }) => (
  <IndexLayout>
    <Root>{children}</Root>
  </IndexLayout>
);

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
