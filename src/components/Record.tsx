import React from 'react';
import { styled } from '../theme/index';

export interface Props {
  content: string,
  year: number
}

const StyledArticle = styled.article`
  margin-bottom: 24px;
`;

const StyledDate = styled.p`
  font-family: ${props => props.theme.typography.fontFamily};
  margin: 0;
  margin-bottom: 8px;
  text-align: center;
`;

const StyledContent = styled.p`
  color: ${props => props.theme.typography.scribe.color};
  font-family: ${props => props.theme.typography.scribe.fontFamily};
  font-weight: ${props => props.theme.typography.scribe.fontWeight};
  font-size: 24px;
  line-height: ${props => props.theme.typography.scribe.lineHeight};
  margin: 0;
  margin-bottom: 8px;
  text-align: center;
`;

export default function Record({
  content,
  year
}: Props) {
  return (
    <StyledArticle key={year}>
      <StyledDate>
        {year}
      </StyledDate>
      <StyledContent>{content}</StyledContent>
    </StyledArticle>
  )
}