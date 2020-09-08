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
`;

const StyledLi = styled.li`
  color: ${props => props.theme.typography.scribe.color};
  font-family: ${props => props.theme.typography.fontFamily};
  line-height: ${props => props.theme.typography.scribe.lineHeight};
`;

export default function About() {
  return (
    <Layout>
      <Container>
        <StyledHeading>About</StyledHeading>
        <StyledP>lineaday.com is designed...</StyledP>

        <StyledHeading>Why, and how it's free</StyledHeading>
        <StyledP>
          The aim is to keep lineaday.com free, and open-source forever.<br />
          This is important due to the potential mental health benefits of journalling.<br />
          I don't generate any income from this site.<br />
          Running it is only possible thanks to some amazing services which offer free infrastructure
          (feel free to go and thank them on twitter if you like).
        </StyledP>
        <ul>
          <StyledLi>
            <Link href="https://www.netlify.com/" target="_BLANK">Netlify</Link>
            {' '}
            (
            <Link href="https://twitter.com/Netlify" target="_BLANK">@Netlify</Link>
            )
          </StyledLi>
          <StyledLi>
            <Link href="https://fauna.com/" target="_BLANK">Fauna</Link>
            {' '}
            (
            <Link href="https://twitter.com/fauna" target="_BLANK">@fauna</Link>
            )
          </StyledLi>
          <StyledLi>
            <Link href="https://github.com/" target="_BLANK">GitHub</Link>
            {' '}
            (
            <Link href="https://twitter.com/github" target="_BLANK">@github</Link>
            )
          </StyledLi>
        </ul>
        <StyledP>
          If user numbers increase it may become impossible to keep running the site on 'free-tiers' of these services.<br />
          In the event that this does have to be moved on to paid infrastructure some time in the future
          I will have to find some means to generate income to cover the costs.<br />
          I don't have the answers right now to how that would work, but below is a list of options, in my current order of preference:<br />
        </StyledP>
        <ol>
          <StyledLi>Voluntary donations / charity funding</StyledLi>
          <StyledLi>Paid extras</StyledLi>
          <StyledLi>Advertising</StyledLi>
          <StyledLi>Subscriptions</StyledLi>
        </ol>
        <StyledP>
          The one thing that I can guarantee is that <strong>your personal data is yours</strong>.<br />
          It will never be shared without your permission. Not for targeted advertising. Not for money.
        </StyledP>

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

        <StyledHeading>The roadmap</StyledHeading>
        <StyledP>
          As this project is guided by you I don't have a set roadmap I'm following currently.<br />
          Some possible paths are listed below:
        </StyledP>
        <ul>
          <StyledLi>Add self-service account recovery (reset password link).</StyledLi>
          <StyledLi>Add SSO. This would allow you to sign-up/sign-in with accounts you already have with other providers (eg. Facebook, Google, etc.)</StyledLi>
          <StyledLi>PWA functionality. This means you can install the website on your phone—like an app—and use some of the features offline.</StyledLi>
        </ul>
      </Container>
    </Layout>
  );
}
