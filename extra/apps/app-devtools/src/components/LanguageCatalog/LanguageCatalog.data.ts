export const languages = ['en', 'he'];

export const methods: string[] = [
    'appId', //
    '=====',
    'm.rounded(v.price)',
    'm.full(v.price)',
    'd.now()',
    'd.dateShort(v.date)',
    'd.dateLong(v.date)',
    'd.dayOfWeek(v.date)',
    'd.dayOfWeek(v.date, true)',
    'd.dateDb(v.date)',
    'd.dateDbLong(v.date)',
    'n.rounded(v.number)',
    'n.full(v.number)',
    'n.ordinal(v.number)',
    'n.cardinal(v.number, v.nouns)',
    'n.conjunction(v.items)',
    'n.disjunction(v.items)',
    'h.time(v.date)',
    'h.timeDifference(3.5, "years")',
    'h.timeAgo(v.date)',
    'h.duration(v.duration)',
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

const number = 5286.43;
const price = 100094.43;
const duration = 20000;

const nouns = [
    ['one', 'item'],
    ['two', 'items'],
    ['few', 'items'],
    ['other', 'items'],
];

const items = ['one', 'two', 'three'];

export const v = {
    date,
    price,
    number,
    nouns,
    items,
    duration,
};
