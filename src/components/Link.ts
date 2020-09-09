import { styled } from '../theme/index';

export default styled.a`
  color: #333;
  position: relative;
  text-decoration: none;
  word-break: break-word;

  &:after {
    border-bottom: solid 2px ${props => props.theme.palette.primary};
    content: "";
    left: 0;
    position: absolute;
    top: 100%;
    transition: border-bottom-color 100ms ease-in-out;
    width: 100%;
  }

  &:hover {
    &:after {
      border-bottom-color: ${props => props.theme.palette.primaryHover};
    }
  }
`;
