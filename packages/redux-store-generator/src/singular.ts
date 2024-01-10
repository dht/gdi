const exceptions: any = {
    people: 'person',
};

export const toSingular = (pluralWord: string): string => {
    if (exceptions[pluralWord]) {
        return exceptions[pluralWord];
    }

    if (/[a-z]+oes$/.test(pluralWord)) {
        return pluralWord.replace(/oes$/, 'o');
    }

    if (/[a-z]+ies$/.test(pluralWord)) {
        return pluralWord.replace(/ies$/, 'y');
    }

    if (/[a-z]+es$/.test(pluralWord)) {
        return pluralWord.replace(/es$/, '');
    }

    if (/[a-z]+s$/.test(pluralWord)) {
        return pluralWord.replace(/s$/, '');
    }

    return pluralWord;
};

export const toSingularAction = (nodeName: string) =>
    toSingular(nodeName).toUpperCase();
