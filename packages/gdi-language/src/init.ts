import { getString, setString } from 'shared-base';
import { initMethods } from './packs';

const KEY = 'LANGUAGE_CODE';

export const setLanguage = (languageCode: LanguageIso) => {
    setString(KEY, languageCode);
};

export const changeLanguage = (languageCode: LanguageIso) => {
    setLanguage(languageCode);
    initLanguage();
    document.location.reload();
};

export const initLanguage = () => {
    const languageCode = (getString(KEY) || 'en') as LanguageIso;

    const initMethod = initMethods[languageCode];

    if (typeof initMethod !== 'function') {
        console.log(`No init method for language ${languageCode}`);
        return;
    }

    initMethod();
    return languageCode;
};
