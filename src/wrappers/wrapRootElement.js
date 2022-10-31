import React from 'react';
import { ModeProvider } from 'contexts/ModeProvider';

export const wrapRootElement = ({ element }) => (
  <ModeProvider>{element}</ModeProvider>
);
