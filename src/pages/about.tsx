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
  color: #555;
  font-family: ${props => props.theme.typography.fontFamily};
  line-height: ${props => props.theme.typography.scribe.lineHeight};
  margin: 0;
  margin-bottom: 16px;
`;

const StyledLi = styled.li`
  color: #555;
  font-family: ${props => props.theme.typography.fontFamily};
  line-height: ${props => props.theme.typography.scribe.lineHeight};
`;

export default function About() {
  return (
    <Layout>
      <Container>
        <StyledHeading>About</StyledHeading>
        <StyledP>
          lineadaydiary.com is designed to be a simple journalling tool with a clean interface, so that
          you can focus on what you want to write.<br />
          Input is limited to 250 characters to help prevent it becoming onerous to maintain.
        </StyledP>

        <StyledHeading>Why, and how it's free</StyledHeading>
        <StyledP>
          The aim is to keep lineadaydiary.com free, and open-source forever.<br />
          This is important due to the potential mental health benefits of journalling<sup>[<Link href="#ref-1">1-5</Link>]</sup>.<br />
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
          lineadaydiary.com is an open-source project.
          This means <em>you</em> can influence the direction it goes in.
          To file an issue, or request a feature, please use the
          {' '}
          <Link href="https://github.com/nickheal/lineadaydiary.com/issues" target="_BLANK">
            GitHub issue tracker
          </Link>
          .
        </StyledP>
        <StyledP>
          You can review, and request changes to the code at
          {' '}
          <Link href="https://github.com/nickheal/lineadaydiary.com" target="_BLANK">
            https://github.com/nickheal/lineadaydiary.com
          </Link>
          .
          {' '}
          Please read the
          {' '}
          <Link href="https://github.com/nickheal/lineadaydiary.com/blob/.github/CONTRIBUTING.md" target="_BLANK">
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
          <StyledLi>Add open-source internationalisation. This would let volunteers contribute local language translations for elements of the UI.</StyledLi>
          <StyledLi>PWA functionality. This means you can install the website on your phone—like an app—and use some of the features offline.</StyledLi>
        </ul>

        <StyledHeading>References</StyledHeading>
        <ol>
          <StyledLi><Link id="ref-1" href="https://www.mind.org.uk/information-support/your-stories/journal-to-self-love/">https://www.mind.org.uk/information-support/your-stories/journal-to-self-love/</Link></StyledLi>
          <StyledLi><Link id="ref-2" href="https://www.researchgate.net/profile/Philip_Ullrich/publication/11212874_Journaling_about_stressful_events_Effects_of_cognitive_processing_and_emotional_expression/links/0fcfd5090027dd0d0a000000.pdf">https://www.researchgate.net/profile/Philip_Ullrich/publication/11212874_Journaling_about_stressful_events_Effects_of_cognitive_processing_and_emotional_expression/links/0fcfd5090027dd0d0a000000.pdf</Link></StyledLi>
          <StyledLi><Link id="ref-3" href="https://positivepsychology.com/benefits-of-journaling/">https://positivepsychology.com/benefits-of-journaling/</Link></StyledLi>
          <StyledLi><Link id="ref-4" href="https://www.self.com/story/how-to-start-a-journaling-practice">https://www.self.com/story/how-to-start-a-journaling-practice</Link></StyledLi>
          <StyledLi><Link id="ref-5" href="https://www.sciencedirect.com/science/article/abs/pii/S0260691718303113">https://www.sciencedirect.com/science/article/abs/pii/S0260691718303113</Link></StyledLi>
        </ol>
      </Container>
    </Layout>
  );
}
