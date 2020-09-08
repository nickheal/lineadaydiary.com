import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Helmet } from 'react-helmet';
import Nav from './Nav';
import theme, { styled } from '../theme/index';

interface Props {
  children: React.ReactNode
}

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const StyledMain = styled.main`
  padding-bottom: 120px;
`;

const StyledFooter = styled.footer`
  color: #555;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 12px;
  padding: 32px;
  text-align: center;
`;

export default function Layout({
  children
}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Helmet
        htmlAttributes={{ lang: 'en-gb' }}
        title="lineadaydiary.com. Write for you."
      />
      <Global styles={globalStyles} />
      <Nav />
      <StyledMain>
        { children }
      </StyledMain>
      <StyledFooter>
        &copy; {new Date().getFullYear()} Nicholas S. Heal.
      </StyledFooter>
    </ThemeProvider>
  );
}
