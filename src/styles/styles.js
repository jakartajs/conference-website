import { css } from '@emotion/core';
import theme from '../utils/theme';

export default css`
  html {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;

    @media (min-width: ${theme.pxSizes.breakpoints.lg}px) {
      font-size: 18px;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${theme.fonts.sansSerif};
    color: ${theme.colors.body};
    background-color: ${theme.colors.background};
    text-size-adjust: 100%;
  }

  a {
    color: ${theme.colors.brand};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
    vertical-align: middle;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${theme.colors.brand};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0.25rem 0.5rem;
    border: 1px solid ${theme.colors.brand};
  }

  th {
    text-align: left;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.414rem;
    margin-bottom: 0.5rem;
    color: inherit;
    font-weight: 500;
    line-height: 1.25;
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${theme.emSizes.fontSizes.h1}rem;
  }

  h2 {
    font-size: ${theme.emSizes.fontSizes.h2}rem;
  }

  h3 {
    font-size: ${theme.emSizes.fontSizes.h3}rem;
  }

  h4,
  h5,
  h6 {
    font-size: ${theme.emSizes.fontSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1em;
  }

  strong {
    color: #000;
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-left: 0;
    margin-bottom: 0.5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${theme.colors.brand};
  }

  blockquote {
    margin: 0.8rem 0;
    padding: 0.5rem 1rem;
    border-left: 0.25rem solid ${theme.colors.brand};
    color: #000;
    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${theme.pxSizes.breakpoints.md}px) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
`;
