import React from 'react';
import { Link } from 'gatsby';
import { styled } from '../theme/index';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  padding: 8px;
`;

const StyledLink = styled(Link)`
  border-radius: 8px;
  color: #333;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  padding: 16px;
  text-decoration: none;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Layout() {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/write">Write</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledNav>
  );
}
