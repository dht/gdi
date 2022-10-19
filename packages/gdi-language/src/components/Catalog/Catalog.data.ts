export const languages = ['en', 'he'];

export const methods: string[] = [
    'appId', //
    '=====',
    'd.now()',
    'h.time(v.date)',
];

export const keysByLanguageApp1 = {
    en: {
        good: 'Good',
    },
    he: {
        good: 'טוב',
    },
};

export const keysByLanguageApp2 = {
    en: {
        nice: 'Nice',
    },
    he: {
        nice: 'טוב',
    },
};

const date = new Date();
date.setHours(10);

export const v = {
    date,
};
