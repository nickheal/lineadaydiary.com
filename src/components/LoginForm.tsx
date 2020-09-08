import React, { useState } from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { FiLogIn } from 'react-icons/fi';
import Button from '../components/Button';
import Error from '../components/Error';
import Form from '../components/Form';
import Input from '../components/Input';
import Label from '../components/Label';
import Legend from '../components/Legend';
import IconAndText from '../components/IconAndText';

interface Props {
  onLogIn: () => void
}

export default function LoginPopup({
  onLogIn
}: Props) {
  const { loginUser } = useIdentityContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>, setter: (value: string) => void) {
    setter(e.currentTarget.value);
    setError(null);
  }

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    loginUser(email, password, true)
      .then((user) => {
        if (process.env.NODE_ENV !== 'production') console.log('Success! Logged in', user)
        onLogIn();
      })
      .catch(() => { 
        setError('There was an issue logging in.');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Form onSubmit={onSubmit}>
      <Legend>Sign-in</Legend>
      <Label htmlFor="email">E-mail</Label>
      <Input
        name="email"
        onChange={e => onInputChange(e, setEmail)}
        required
        value={email}
      />
      <Label htmlFor="password">Password</Label>
      <Input
        name="password"
        onChange={e => onInputChange(e, setPassword)}
        required
        value={password}
      />
      <Button aria-busy={loading} disabled={loading} type="submit">
        <IconAndText>
          <FiLogIn />
          log in
        </IconAndText>
      </Button>
      {error ? <Error>{ error }</Error> : null}
    </Form>
  );
}
