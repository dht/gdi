import { i18n } from './i18n.instance';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const LANGUAGE_KEY = 'i18n.language';

type I18nProviderProps = {
    children: JSX.Element | JSX.Element[];
};

export const changeLanguage = (language: string) => {
    localStorage.setItem(LANGUAGE_KEY, language);
};

export const getLanguage = (defaultLanguage: string) => {
    return localStorage.getItem(LANGUAGE_KEY) || defaultLanguage;
};

export const I18nProvider = (props: I18nProviderProps) => {
    return (
        <I18nextProvider i18n={i18n}>
            <Inner {...props} />
        </I18nextProvider>
    );
};

export const Inner = (props: I18nProviderProps) => {
    const { ready } = useTranslation();

    useEffect(() => {}, [ready]);

    return <>{props.children}</>;
};
