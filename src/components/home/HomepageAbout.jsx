import styled from 'react-emotion';

const HomepageAbout = styled('div')`
  padding: 1rem;

  @supports (display: grid) {
    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }
  }
`;

export default HomepageAbout;
