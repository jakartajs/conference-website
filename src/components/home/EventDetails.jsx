import styled from 'react-emotion';

const EventDetails = styled.div`
  object-fit: cover;
  background-color: transparent;
  border: 4px solid ${props => props.theme.colors.border};
  padding: 0.5rem 1rem;
  margin: 1rem;
  box-shadow: -1rem 1rem ${props => props.theme.colors.border};

  ul {
    margin: 0;
    padding-left: 0;
    list-style-type: none;

    @media (min-width: ${props => props.theme.pxSizes.breakpoints.lg}px) {
      font-size: 1.25em;
    }

    li {
      &:before {
        margin-right: 0.5rem;
        content: '/';
      }
    }
  }

  @supports (display: grid) {
    @media (min-width: ${props => props.theme.pxSizes.breakpoints.md}px) {
      grid-column: 1 / 3;
      grid-row: 1 / span 3;
    }
  }
`;

export default EventDetails;
