import styled from '@emotion/styled';

const Container = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: ${props => props.theme.pxSizes.widths.md}px;

  @media (min-width: ${props => props.theme.pxSizes.breakpoints.lg}px) {
    max-width: ${props => props.theme.pxSizes.widths.lg}px;
  }

  @media (min-width: ${props => props.theme.pxSizes.breakpoints.xl}px) {
    max-width: ${props => props.theme.pxSizes.widths.xl}px;
  }
`;

export default Container;
