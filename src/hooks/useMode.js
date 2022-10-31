import { useContext } from 'react';
import { ModeContext } from 'contexts/ModeProvider';

export function useMode() {
  return useContext(ModeContext);
}
