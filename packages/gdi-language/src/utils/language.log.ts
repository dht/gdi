import { LanguageIso } from '../types';

const sent: Json = {};

export const log = (language: LanguageIso, appId: string, key: string) => {
    const sentKey = `${language}-${appId}-${key}`;

    if (sent[sentKey]) {
        return;
    }

    fetch('http://localhost:3005', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            language,
            appId,
            key,
        }),
    });

    sent[sentKey] = true;
};
