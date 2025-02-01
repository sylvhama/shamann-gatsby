import { useLocation } from '@reach/router';

export function useFrenchUrl() {
  const location = useLocation();
  const currentPathname = location.pathname;

  const base = 'https://shamann.fr';
  let pathname = '';

  switch (currentPathname) {
    case '/relevant-experience/':
      pathname = '/parcours';
      break;
    case '/showcase/':
      pathname = '/vitrine';
      break;
    case '/articles-talks/':
      pathname = '/articles-presentations';
      break;
    default:
      break;
  }

  return base + pathname;
}
