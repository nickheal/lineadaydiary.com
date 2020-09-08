import { keyframes } from '@emotion/core';
import { styled } from '../theme/index';

const loading = keyframes`
  0% { background-position: 100% 0; }
  100% { background-position: 0% 0; }
`;

export default styled.button`
  background-color: ${props => props.theme.palette.primary};
  border: 0;
  border-radius: 8px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  padding: 13px 24px;
  transition: background-color 100ms ease-in-out;

  &:hover, &:focus {
    background-color: ${props => props.theme.palette.primaryHover};
  }

  &[disabled] {
    opacity: 0.5;
  }

  &[aria-busy="true"] {
    animation: ${loading} 1s ease infinite forwards;
    background: repeating-linear-gradient(
      -90deg,
      ${props => props.theme.palette.primary},
      ${props => props.theme.palette.primary} 50%,
      ${props => props.theme.palette.primaryHover} 50%,
      ${props => props.theme.palette.primaryHover} 100%
    );
    background-size: 200% 100%;
  }
`;
