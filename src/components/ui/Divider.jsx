import styled from 'react-emotion';

const Divider = styled.hr`
  border: none;
  border-top: 4px solid ${props => props.theme.colors.border};
  max-width: 12em;
  margin: 3rem auto;
`;

export default Divider;
