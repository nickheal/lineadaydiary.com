import React from 'react';
import { styled } from '../theme/index';

interface Props {
  children: React.ReactNode
}

const StyledContainer = styled.section`
  margin: 0 auto;
  max-width: 650px;
  padding: 16px;
  width: 100%;
`;

export default function Container({
  children
}: Props) {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}
