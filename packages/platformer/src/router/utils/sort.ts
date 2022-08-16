export const sortBy = <T extends Json>(fieldA: string, fieldB: string) => {
    return (a: T, b: T) => {
        if (a[fieldA] === b[fieldA]) {
            return a[fieldB] > b[fieldB] ? 1 : -1;
        }

        return a[fieldA] > b[fieldA] ? 1 : -1;
    };
};
