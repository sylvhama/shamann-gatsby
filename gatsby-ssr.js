import { wrapRootElement as exportMeAsWrapRootElement } from './src/components/wrapRootElement';
export { wrapPageElement } from './src/components/wrapPageElement';

// The build is failing if we directly export like we do with wrapPageElement
export const wrapRootElement = exportMeAsWrapRootElement;
