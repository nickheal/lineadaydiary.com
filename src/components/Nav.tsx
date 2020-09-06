import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { styled } from '../theme/index';
import Button from '../components/Button';
import LoginPopup from './LoginPopup';

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
  padding: 13px 24px;
  text-decoration: none;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Layout() {
  const { isLoggedIn, logoutUser } = useIdentityContext();

  const [loginPopup, setLoginPopup] = useState(false);
  
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn ? <StyledLink to="/write">Write</StyledLink> : null}
      <StyledLink to="/about">About</StyledLink>
      {isLoggedIn ? null : <Button onClick={() => setLoginPopup(true)}>Log in</Button>}
      {isLoggedIn ? <Button onClick={() => logoutUser()}>Log out</Button> : null}
      {loginPopup ? <LoginPopup onClose={() => setLoginPopup(false)} /> : null}
    </StyledNav>
  );
}
