import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Nav from './Nav';
import theme from '../theme/index';

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

export default function Layout({
  children
}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Nav />
      <main>
        { children }
      </main>
    </ThemeProvider>
  );
}
