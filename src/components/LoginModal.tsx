import React from 'react';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

interface Props {
  onClose: () => void
}

export default function LoginPopup({
  onClose
}: Props) {
  return (
    <Modal onClose={onClose}>
      <LoginForm onLogIn={onClose} />
      <SignUpForm onSignUp={onClose} />
    </Modal>
  );
}
