export const sortBy = (fieldName: string) => (a: Json, b: Json) => {
    if (a[fieldName] === b[fieldName]) {
        return 0;
    }
    return a[fieldName] > b[fieldName] ? 1 : -1;
};

export const sortByTicketKey = (descending?: boolean) => (a: Json, b: Json) => {
    const keyA = parseKey(a.key ?? '');
    const keyB = parseKey(b.key ?? '');

    const multiplier = descending ? -1 : 1;

    if (keyA.project !== keyB.project) {
        return keyA.project > keyB.project ? multiplier : -multiplier;
    }

    if (keyA.number === keyB.number) {
        return 0;
    }

    return keyA.number > keyB.number ? multiplier : -multiplier;
};

const parseKey = (key: string) => {
    const parts = key.split('-');
    return {
        project: parts[0],
        number: parseInt(parts[1], 10),
    };
};
