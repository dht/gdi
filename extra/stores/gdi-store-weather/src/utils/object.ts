export const arrayToObject = (arr: any) => {
    return arr.reduce((output: any, item: any) => {
        output[item.id] = item;
        return output;
    }, {} as any);
};

export const objectToArray = (obj: any) => {
    return Object.values(obj);
};

type Predicate = (item: any) => boolean;

export const arrayToFilteredObject = (arr: any, predicate: Predicate) => {
    return arrayToObject(arr.filter(predicate));
};

export const objectToFilteredObject = (obj: any, predicate: Predicate) => {
    return arrayToFilteredObject(objectToArray(obj), predicate);
};
