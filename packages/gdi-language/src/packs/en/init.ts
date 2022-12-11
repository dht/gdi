import { initFormat } from '@gdi/language';
import { definitions } from './definitions';

export const initLanguagePack = () => {
    initFormat(definitions);
};
