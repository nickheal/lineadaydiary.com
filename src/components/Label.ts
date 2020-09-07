import { styled } from '../theme/index';

export default styled.label`
  color: #777;
  display: block;
  font-family: ${props => props.theme.typography.fontFamily};
  margin-bottom: 8px;
`;
