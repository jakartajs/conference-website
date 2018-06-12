import styled from 'react-emotion';

const HomepageHero = styled('div')`
  font-size: 16px;
  font-weight: 300;

  b,
  strong {
    font-weight: 500;
  }

  @supports (display: grid) {
    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      grid-template-rows: minmax(160px, 5fr) min-content 2fr;
      font-size: 18px;
    }

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.lg}px) {
      grid-template-columns: 370px 1fr 2fr;
      grid-template-rows: minmax(150px, 5fr) min-content 2fr;
      font-size: 24px;
    }
  }
`;

export default HomepageHero;
