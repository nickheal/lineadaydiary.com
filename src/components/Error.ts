import { styled } from '../theme/index';

export default styled.p`
  color: ${props => props.theme.palette.error};
  font-family: ${props => props.theme.typography.fontFamily};
`;
