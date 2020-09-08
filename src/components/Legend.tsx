import React from 'react';
import { styled } from '../theme/index';

const StyledLegend = styled.legend`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  font-family: ${props => props.theme.typography.fontFamily};
  margin-bottom: 32px;
  padding: 0;
  text-align: center;
`;

const Line = styled.div`
  background-color: #e0e0e0;
  display: block;
  flex-grow: 1;
  height: 1px;
`;

const Text = styled.span`
  padding: 0 16px;
`;

interface Props {
  children: React.ReactNode
}

export default function Legend({
  children
}: Props) {
  return (
    <StyledLegend>
      <Line />
      <Text>{ children }</Text>
      <Line />
    </StyledLegend>
  )
}
