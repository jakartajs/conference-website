import styled from 'react-emotion';

const HomepageCallToAction = styled('div')`
  padding: 0 1rem 1rem;

  @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
    padding-top: 1rem 1.5rem;
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style-type: none;
    text-align: left;

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      font-size: 1.25em;
    }

    li {
      @media (min-width: ${props => props.theme.pxSizes.breakpoints.lg}px) {
        display: inline-block;
        margin-right: 1.5rem;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  @supports (display: grid) {
    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      grid-column: 3 / 4;
      grid-row: 3 / 4;
    }

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.lg}px) {
      ul {
        text-align: left;
      }
    }
  }
`;

export default HomepageCallToAction;
