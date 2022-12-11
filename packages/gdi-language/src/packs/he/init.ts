import { initFormat } from '../../utils/formatObjects';
import { definitions } from './definitions';

export const initLanguagePack = () => {
    initFormat(definitions);

    const body = document.querySelector('body');
    if (!body) {
        return;
    }

    body.classList.add('rtl');
    body.setAttribute('dir', 'rtl');
};
