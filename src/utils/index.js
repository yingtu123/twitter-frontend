import VConsole from 'vconsole';
import { isMobile } from 'react-device-detect';

// eslint-disable-next-line import/prefer-default-export
export const startVConsole = () => isMobile && new VConsole();
