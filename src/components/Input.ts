import { styled } from '../theme/index';

export default styled.input`
  border: 0;
  border-bottom: solid 2px ${props => props.theme.palette.primary};
  display: block;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  margin-bottom: 16px;
  padding: 10px 24px;
`;
