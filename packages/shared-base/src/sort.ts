type Order = 'asc' | 'desc';

export const sortBy =
    (fieldName: string | string[], order: Order = 'asc') =>
    (a?: Json = {}, b?: Json = {}) => {
        const arr = Array.isArray(fieldName) ? fieldName : [fieldName];

        let result = 0;

        for (let i = 0; i < arr.length; i++) {
            const field = arr[i];

            if (a[field] > b[field]) {
                result = 1;
                break;
            }

            if (a[field] < b[field]) {
                result = -1;
                break;
            }
        }

        return order === 'asc' ? result : -result;
    };
