import React from 'react';
import { navigate } from 'gatsby';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

interface Props {
  onClose: () => void
}

export default function LoginPopup({
  onClose
}: Props) {
  function onLogIn() {
    onClose();
    navigate('/write');
  }

  return (
    <Modal onClose={onClose}>
      <LoginForm onLogIn={onLogIn} />
      <SignUpForm onSignUp={onLogIn} />
    </Modal>
  );
}
