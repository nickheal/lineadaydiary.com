import React from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';
import Button from '../components/Button';
import Input from '../components/Input';
import Label from '../components/Label';

interface Props {
  onLogIn: () => void
}

export default function LoginPopup({
  onLogIn
}: Props) {
  const { loginUser } = useIdentityContext();

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    const target = e.target as typeof e.target & { email: { value: string }; password: { value: string } }
    const email = target.email.value
    const password = target.password.value
    loginUser(email, password, true)
      .then((user) => {
        if (process.env.NODE_ENV !== 'production') console.log('Success! Logged in', user)
        onLogIn();
      })
      // .catch((err) => void console.error(err) || setMsg('Error: ' + err.message))
  }

  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="email">E-mail</Label>
      <Input name="email" />
      <Label htmlFor="password">Password</Label>
      <Input name="password" />
      <Button>Log in</Button>
    </form>
  );
}
