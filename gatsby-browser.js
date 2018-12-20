import React from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from './src/components/Layout';

const theme = {
  color: {
    lightBlue: '#B3E5FC',
    blue: '#03A9F4',
    darkGrey: '#212121',
  },
  font: { mono: `'Roboto Mono', monospace` },
  breakpoint: '640px',
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const onServiceWorkerUpdateFound = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};
