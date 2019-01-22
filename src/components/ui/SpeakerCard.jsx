import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const Image = css`
  margin: 1.5rem auto;
  max-width: 250px;
  border-radius: 250px;
  overflow: hidden;
`;

const SpeakerCard = ({ name, company, imageSharp }) => (
  <Root>
    {imageSharp && <Img outerWrapperClassName={Image} alt={name} sizes={imageSharp} />}
    <Inner>
      <Title>{name}</Title>
      {company && <Subtitle>{company}</Subtitle>}
    </Inner>
  </Root>
);

SpeakerCard.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string,
  imageSharp: PropTypes.shape({}),
};

SpeakerCard.defaultProps = {
  company: null,
  imageSharp: null,
};

export default SpeakerCard;

const Root = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

const Inner = styled.div``;

const Title = styled.h1`
  margin: 0;
  font-weight: 300;
`;

const Subtitle = styled.p`
  margin: 0;
  margin-top: 0.5;
  font-weight: 300;
  font-size: ${props => props.theme.emSizes.fontSizes.h3}rem;
`;
