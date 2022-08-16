export const isPromise = (object: any) => {
    return typeof object === 'function' && typeof object.then === 'function';
};
