import React from 'react';
import { styled } from '../theme/index';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Link from '../components/Link';

const StyledHeading = styled.h2`
  font-family: ${props => props.theme.typography.fontFamily};
  line-height: ${props => props.theme.typography.scribe.lineHeight};
  margin: 0;
  margin-bottom: 8px;
  text-align: center;
`;

const StyledP = styled.p`
  color: ${props => props.theme.typography.scribe.color};
  font-family: ${props => props.theme.typography.fontFamily};
  line-height: ${props => props.theme.typography.scribe.lineHeight};
  margin: 0;
  margin-bottom: 16px;
  text-align: center;
`;

export default function About() {
  return (
    <Layout>
      <Container>
        <StyledHeading>About</StyledHeading>
        <StyledP>lineaday.com is designed...</StyledP>

        <StyledHeading>The technical stuff</StyledHeading>
        <StyledP>
          lineaday.com is an open-source project.
          This means <em>you</em> can influence the direction it goes in.
          To file an issue, or request a feature, please use the
          {' '}
          <Link href="https://github.com/nickheal/lineaday.com/issues" target="_BLANK">
            GitHub issue tracker
          </Link>
          .
        </StyledP>
        <StyledP>
          You can review, and request changes to the code at
          {' '}
          <Link href="https://github.com/nickheal/lineaday.com" target="_BLANK">
            https://github.com/nickheal/lineaday.com
          </Link>
          .
          {' '}
          Please read the
          {' '}
          <Link href="https://github.com/nickheal/lineaday.com/blob/.github/CONTRIBUTING.md" target="_BLANK">
            contribution guide
          </Link>
          {' '}
          before submitting a pull-request.
        </StyledP>
      </Container>
    </Layout>
  );
}
