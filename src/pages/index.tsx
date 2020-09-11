import React from 'react';
import { styled } from '../theme/index';
import Layout from '../components/Layout';
import Container from '../components/Container';
import demo from './demo.gif';
import demo2x from './demo@2x.gif';

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

const Image = styled.img`
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 60px;
  max-width: 100%;
`;

const Para = styled.p`
  font-family: ${props => props.theme.typography.fontFamily};
  line-height: 1.4;
  margin-top: 0;
  text-align: center;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <Title>lineadaydiary.com</Title>
        <SubTitle>Write for you.</SubTitle>
        <Image
          srcSet={`${demo}, ${demo2x} 2x`}
          src={demo}
          alt="Demo gif"
        />
        <Para>
          In the modern world we are inundated with websites that let us write
          with the focus on impressing other people.
        </Para>
        <Para>
          Keeping a line-a-day diary for yourself could be a mental-health
          antidote to social media.
        </Para>
      </Container>
    </Layout>
  );
}
