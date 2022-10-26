export const byField = (fieldName: string) => (a: Json, b: Json) => {
    if (a[fieldName] === b[fieldName]) {
        return 0;
    }
    return a[fieldName] > b[fieldName] ? 1 : -1;
};
