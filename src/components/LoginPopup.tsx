import React from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { styled } from '../theme/index';
import Button from './Button';
import Input from './Input';
import Label from './Label';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const StyledWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  left: 50%;
  padding: 32px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function LoginPopup() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <LoginForm />
        <SignUpForm />
      </StyledWrapper>
    </StyledContainer>
  );
}
