import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { FiLogIn, FiLogOut, FiMenu, FiPenTool, FiXCircle } from 'react-icons/fi';
import { styled } from '../theme/index';
import Button from './Button';
import LoginModal from './LoginModal';
import IconAndText from './IconAndText';
import VisuallyHidden from './VisuallyHidden';

interface StyledNavProps {
  open: boolean;
}
const StyledNav = styled.nav<StyledNavProps>`
  background: white;
  border-radius: 0 0 8px 0;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  display: ${props => props.open ? 'block' : 'none'};
  justify-content: center;
  margin-bottom: 32px;
  overflow: hidden;
  padding: 0;
  position: fixed;
  top: 0;
  z-index: 1;

  ${props => props.theme.mq.tablet} {
    background: transparent;
    border: 0;
    box-shadow: none;
    display: flex;
    padding: 8px;
    position: static;
  }
`;

const StyledLink = styled(Link)`
  border-radius: 8px;
  color: #333;
  display: block;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  padding: 13px 24px;
  position: relative;
  text-decoration: none;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    &::after {
      background: ${props => props.theme.palette.primaryHover};
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      width: calc(100% - 48px);
    }
  }
`;

const MenuOpenButton = styled.button`
  background: 0;
  border: 0;
  cursor: pointer;
  margin-bottom: 32px;
  padding: 16px;

  ${props => props.theme.mq.tablet} {
    display: none;
  }
`;

const MenuCloseButton = styled.button`
  background: 0;
  border: 0;
  cursor: pointer;
  padding: 16px;

  ${props => props.theme.mq.tablet} {
    display: none;
  }
`;

const NavButton = styled(Button)`
  border-radius: 0;

  ${props => props.theme.mq.tablet} {
    border-radius: 8px;
  }
`;

export default function Layout() {
  const { isLoggedIn, logoutUser } = useIdentityContext();

  const [loginOpen, setLoginOpen] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  
  return (
    <>
      <MenuOpenButton onClick={() => setLoginOpen(true)}>
        <FiMenu size={32} strokeWidth={1} />
          <VisuallyHidden>Open navigation</VisuallyHidden>
      </MenuOpenButton>
      <StyledNav open={loginOpen}>
        <MenuCloseButton onClick={() => setLoginOpen(false)}>
          <FiXCircle size={32} strokeWidth={1} />
          <VisuallyHidden>Close navigation</VisuallyHidden>
        </MenuCloseButton>
        <StyledLink activeClassName="active" to="/">Home</StyledLink>
        {isLoggedIn ? (
          <StyledLink activeClassName="active" to="/write">
            <IconAndText>
              <FiPenTool />
              write
            </IconAndText>
          </StyledLink>
        ) : null}
        <StyledLink activeClassName="active" to="/about">About</StyledLink>
        {isLoggedIn ? null : (
          <NavButton data-testid="nav-log-in" onClick={() => setLoginPopup(true)}>
            <IconAndText>
              <FiLogIn />
              log in
            </IconAndText>
          </NavButton>
        )}
        {isLoggedIn ? (
          <NavButton onClick={() => logoutUser()}>
            <IconAndText>
              <FiLogOut />
              log out
            </IconAndText>
          </NavButton>
        ) : null}
        {loginPopup ? <LoginModal onClose={() => setLoginPopup(false)} /> : null}
      </StyledNav>
    </>
  );
}
