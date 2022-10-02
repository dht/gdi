export const sortBy =
    (fieldName: String) =>
    (a: Json = {}, b: Json = {}) => {
        const aValue = a[fieldName as any];
        const bValue = b[fieldName as any];

        if (aValue === bValue) {
            return 0;
        }

        return aValue > bValue ? 1 : -1;
    };
