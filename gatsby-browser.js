import React from 'react';

import { IdentityContextProvider } from 'react-netlify-identity';

export const wrapRootElement = ({ element }) => {
  const url = 'https://serene-meninsky-c44e32.netlify.app';

  return (
    <IdentityContextProvider url={url}>
      { element }
    </IdentityContextProvider>
  );
}
