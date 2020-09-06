import React from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { styled } from '../theme/index';
import Button from './Button';

// export interface Props {
//   content: string,
//   year: number
// }

const StyledForm = styled.form`
  margin-bottom: 60px;
  text-align: center;
`;

const StyledLegend = styled.legend`
  font-family: ${props => props.theme.typography.fontFamily};
  margin-bottom: 16px;
`;

const StyledTextArea = styled.textarea`
  background: repeating-linear-gradient(
    transparent,
    transparent 31px,
    #f0f0f0 31px,
    #f0f0f0 32px,
    transparent 32px,
    transparent 34px
  );
  border: 0;
  color: ${props => props.theme.typography.scribe.color};
  display: block;
  font-family: ${props => props.theme.typography.scribe.fontFamily};
  font-weight: ${props => props.theme.typography.scribe.fontWeight};
  font-size: 24px;
  height: 168px;
  line-height: 34px;
  margin: 0 auto 16px;
  max-width: 640px;
  padding: 0 8px;
  resize: none;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

export default function Record() {
  const { user } = useIdentityContext();

  console.log(user);

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    fetch('/.netlify/functions-dist/owner-records', {
      body: JSON.stringify({
        title: 'My todo title',
        completed: false,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => {
      return response.json()
    });
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLegend>Write a note about today</StyledLegend>
      <StyledTextArea maxLength={250} />
      <Button>Submit</Button>
    </StyledForm>
  )
}
