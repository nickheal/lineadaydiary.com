import React from 'react';
import { styled } from '../theme/index';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Link from '../components/Link';

const Title = styled.h1`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 24px;
  margin-top: 0;
  text-align: center;
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.typography.scribe.color};
  font-family: ${props => props.theme.typography.scribe.fontFamily};
  font-size: 60px;
  font-weight: ${props => props.theme.typography.scribe.fontWeight};
  margin-top: 0;
  text-align: center;
`;

const Para = styled.p`
  font-family: ${props => props.theme.typography.fontFamily};
  margin-top: 0;
  text-align: center;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <Title>404</Title>
        <SubTitle>We're sorry, this page couldn't be found.</SubTitle>
        <Para>
          Please use the navigation links at the top, or
          return to the <Link href="/">Home page</Link> to try again.
        </Para>
      </Container>
    </Layout>
  );
}
