import React from 'react';
import { styled } from '../theme/index';

const StyledContainer = styled.div`
  display: flex;

  & > *:first-child {
    margin-right: 6px;
  }

  & > p {
    margin: 0;
  }
`;

interface Props {
  children: React.ReactNode
}

export default function StyledIconAndText({
  children
}: Props) {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}
