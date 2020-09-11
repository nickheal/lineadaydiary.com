import React, { useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { styled } from '../theme/index';
import Layout from '../components/Layout';
import LoginModal from '../components/LoginModal';
import Button from '../components/Button';
import Container from '../components/Container';
import IconAndText from '../components/IconAndText';
import demo from './demo.gif';
import demo2x from './demo@2x.gif';

const Title = styled.h1`
  color: #333;
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
  box-shadow: 1px 1px 10px rgba(0,0,0,0.075);
  margin-bottom: 60px;
  max-width: 100%;
`;

const Para = styled.p`
  color: #555;
  font-family: ${props => props.theme.typography.fontFamily};
  line-height: 1.4;
  margin-top: 0;
  text-align: left;
`;

export default function Home() {
  const { isLoggedIn } = useIdentityContext();

  const [loginPopup, setLoginPopup] = useState(false);

  return (
    <Layout>
      <Container>
        <Title>lineadaydiary.com</Title>
        <SubTitle>Write, for you.</SubTitle>
        <Image
          srcSet={`${demo}, ${demo2x} 2x`}
          src={demo}
          alt="Demo gif"
        />
        <Para>
          In the modern world we are inundated with websites that let us write
          with the focus on presenting ourselves to other people.
        </Para>
        <Para>
          lineadaydiary.com is a journalling web app that encourages you to write
          just a short line or sentence to document each day.
        </Para>
        <Para>
          Once you've completed a year you&rsquo;ll start seeing the previous
          years activity reflected as a welcome reminder below.
        </Para>
        {!isLoggedIn ? (
          <Button onClick={() => setLoginPopup(true)}>
            <IconAndText>
              <FiUserPlus />
              sign up now
            </IconAndText>
          </Button>
        ) : null}
      </Container>
      {loginPopup ? <LoginModal onClose={() => setLoginPopup(false)} /> : null}
    </Layout>
  );
}
