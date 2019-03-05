import React from 'react';
import ThemeProvider from './ThemeProvider';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
