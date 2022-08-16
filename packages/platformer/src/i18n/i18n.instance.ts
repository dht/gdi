import i18next from 'i18next';
import { changeLanguage, getLanguage } from './i18n.provider';

export let i18n: any;

export const initI18n = (resources: any) => {
    let lng = getLanguage('he');

    const search = new URLSearchParams(document.location.search);
    const iw = search.get('iw');

    if (iw) {
        lng = iw;
        changeLanguage(iw);
    }

    const promise = i18next.init({
        lng,
        debug: true,
        resources,
    });

    i18n = i18next;

    return promise;
};
