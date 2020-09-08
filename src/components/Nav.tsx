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
  border: solid 1px grey;
  border-top: 0;
  border-left: 0;
  border-radius: 0 0 8px 0;
  display: ${props => props.open ? 'block' : 'none'};
  justify-content: center;
  margin-bottom: 32px;
  padding: 0;
  position: fixed;
  top: 0;
  z-index: 1;

  ${props => props.theme.mq.tablet} {
    background: transparent;
    border: 0;
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
  text-decoration: none;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: #f0f0f0;
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

export default function Layout() {
  const { isLoggedIn, logoutUser } = useIdentityContext();

  const [loginOpen, setLoginOpen] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  
  return (
    <>
      <MenuOpenButton onClick={() => setLoginOpen(true)}>
        <FiMenu size={32} />
          <VisuallyHidden>Open navigation</VisuallyHidden>
      </MenuOpenButton>
      <StyledNav open={loginOpen}>
        <MenuCloseButton onClick={() => setLoginOpen(false)}>
          <FiXCircle size={32} />
          <VisuallyHidden>Close navigation</VisuallyHidden>
        </MenuCloseButton>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn ? (
          <StyledLink to="/write">
            <IconAndText>
              <FiPenTool />
              Write
            </IconAndText>
          </StyledLink>
        ) : null}
        <StyledLink to="/about">About</StyledLink>
        {isLoggedIn ? null : (
          <Button onClick={() => setLoginPopup(true)}>
            <IconAndText>
              <FiLogIn />
              Log in
            </IconAndText>
          </Button>
        )}
        {isLoggedIn ? (
          <Button onClick={() => logoutUser()}>
            <IconAndText>
              <FiLogOut />
              Log out
            </IconAndText>
          </Button>
        ) : null}
        {loginPopup ? <LoginModal onClose={() => setLoginPopup(false)} /> : null}
      </StyledNav>
    </>
  );
}
