import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { styled } from '../theme/index';

const StyledP = styled.p`
  color: ${props => props.theme.palette.error};
  display: flex;
  font-family: ${props => props.theme.typography.fontFamily};
  justify-content: center;
  margin: 0;
  margin-bottom: 60px;
`;

const StyledIcon = styled(FiAlertTriangle)`
  margin-right: 6px;
`;

export default function Banner({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <StyledP {...props}>
      <StyledIcon />
      {children}
    </StyledP>
  );
}
