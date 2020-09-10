import React from 'react';
import * as Gatsby from 'gatsby';
import userEvent from '@testing-library/user-event';
import { render } from '../testUtils';
import Index from '../../src/pages/index';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({ site: { siteMetadata: {} } }));

describe('New user register', () => {
  it('should let you register a new user to the site', () => {
    const { getByTestId } = render(<Index />);
    userEvent.click(getByTestId('nav-log-in'));
    expect(getByTestId('signupform-sign-up'));
  });
});
