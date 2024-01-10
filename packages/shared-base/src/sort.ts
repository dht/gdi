type Order = 'asc' | 'desc';

export const sortBy =
    (fieldName: string, order: Order = 'asc') =>
    (a?: Json, b?: Json) => {
        if (!a || !b) {
            return 0;
        }

        if (a[fieldName] === b[fieldName]) {
            return 0;
        }

        const sign = order === 'asc' ? 1 : -1;

        return a[fieldName] > b[fieldName] ? sign : -sign;
    };
