import React from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { styled } from '../theme/index';

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
  const { loginUser } = useIdentityContext();

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    const target = e.target as typeof e.target & { email: { value: string }; password: { value: string } }
    const email = target.email.value
    const password = target.password.value
    loginUser(email, password, true)
      .then((user) => {
        if (process.env.NODE_ENV !== 'production') console.log('Success! Logged in', user)
        // if (onLogin) onLogin(user)
      })
      // .catch((err) => void console.error(err) || setMsg('Error: ' + err.message))
  }

  return (
    <StyledContainer>
      <StyledWrapper>
        <form onSubmit={onSubmit}>
          <input name="email" />
          <input name="password" />
          <button>Log in</button>
        </form>
      </StyledWrapper>
    </StyledContainer>
  );
}
