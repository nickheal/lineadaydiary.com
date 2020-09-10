import React from 'react';
import { render } from '@testing-library/react';
import { IdentityContextProvider } from 'react-netlify-identity-widget';
import { LocationProvider } from '@reach/router';

interface Props {
  children: React.ReactNode;
}
function AllTheProviders({ children }: Props) {
  return (
    <LocationProvider>
      <IdentityContextProvider url="https://lineadaydiarytest.netlify.app">
        {children}
      </IdentityContextProvider>
    </LocationProvider>
  )
}

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };