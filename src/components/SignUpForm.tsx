import React from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { FiUserPlus } from 'react-icons/fi';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Label from '../components/Label';
import Legend from '../components/Legend';
import IconAndText from '../components/IconAndText';

interface Props {
  onSignUp: () => void
}

export default function LoginPopup({
  onSignUp
}: Props) {
  const { signupUser } = useIdentityContext();

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & { email: { value: string }; password: { value: string } }
    const email = target.email.value
    const password = target.password.value
    
    signupUser(email, password, {})
      .then((user) => {
        if (process.env.NODE_ENV !== 'production') console.log('Success! Signed up', user);
        onSignUp();
      })
      // .catch((err) => void console.error(err) || setMsg('Error: ' + err.message))
  }

  return (
    <Form onSubmit={onSubmit}>
      <Legend>or register</Legend>
      <Label htmlFor="email">E-mail</Label>
      <Input name="email" required type="email" />
      <Label htmlFor="password">Password</Label>
      <Input name="password" required type="password" />
      <Button>
        <IconAndText>
          <FiUserPlus />
          sign up
        </IconAndText>
      </Button>
    </Form>
  );
}
