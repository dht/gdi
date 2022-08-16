type Location = {
    pathname: string;
    search?: string;
};

export type GetLocationCallback = () => Location;

export let getNavLocation: GetLocationCallback = () => {
    const { pathname, search = '' } = document.location;

    return {
        pathname,
        search,
    };
};

export const initGetNavLocation = (callback: GetLocationCallback) => {
    getNavLocation = callback;
};
