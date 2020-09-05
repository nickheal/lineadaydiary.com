import { styled } from '../theme/index';

export default styled.button`
  background-color: ${props => props.theme.palette.primary};
  border: 0;
  border-radius: 8px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  padding: 16px 24px;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: ${props => props.theme.palette.primaryHover};
  }
`;
