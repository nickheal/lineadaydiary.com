import React from 'react';
import { styled } from '../theme/index';

const StyledDate = styled.p`
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: 700;
  margin: 0;
  margin-bottom: 16px;
  text-align: center;
`;

export default function Timeline() {
  return (
    <>
      <StyledDate>5th September 2020</StyledDate>
      <p>Timeline</p>
    </>
  );
}
