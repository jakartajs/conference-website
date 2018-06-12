import styled from 'react-emotion';

const SpeakerSocials = styled('ul')`
  a {
    color: ${props => props.theme.colors.green};
    border-bottom: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export default SpeakerSocials;
