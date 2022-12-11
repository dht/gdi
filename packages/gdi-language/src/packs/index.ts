import { initLanguagePack as initLanguagePackDe } from './de/init';
import { initLanguagePack as initLanguagePackEn } from './en/init';
import { initLanguagePack as initLanguagePackEs } from './es/init';
import { initLanguagePack as initLanguagePackFr } from './fr/init';
import { initLanguagePack as initLanguagePackHe } from './he/init';
import { initLanguagePack as initLanguagePackIt } from './it/init';
import { initLanguagePack as initLanguagePackNl } from './nl/init';

export const initMethods: Record<LanguageIso, () => void> = {
    de: initLanguagePackDe,
    es: initLanguagePackEs,
    en: initLanguagePackEn,
    fr: initLanguagePackFr,
    he: initLanguagePackHe,
    it: initLanguagePackIt,
    nl: initLanguagePackNl,
};
