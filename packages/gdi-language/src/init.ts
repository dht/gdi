import { definitionsBase } from './data/definitions.base';
import { initFormat } from './utils/formatObjects';

export const initLanguagePack = () => {
    initFormat(definitionsBase);
};
