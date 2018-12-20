import React from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from './src/components/Layout';
import theme from './theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const onServiceWorkerUpdateFound = () =>
  console.log('The application will be updated after next reload.');
