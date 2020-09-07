import React from 'react';
import { styled } from '../theme/index';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
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

interface Props {
  onClose: () => void
}

export default function LoginPopup({
  onClose
}: Props) {
  return (
    <StyledContainer>
      <StyledWrapper>
        <LoginForm onLogIn={onClose} />
        <SignUpForm onSignUp={onClose} />
      </StyledWrapper>
    </StyledContainer>
  );
}
