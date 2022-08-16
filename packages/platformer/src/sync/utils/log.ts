import { reduxStoreId } from './store';

let DEBUG = false;

export const log = (message: string) => {
    if (!DEBUG) {
        return;
    }

    console.log(`${reduxStoreId}: ${message}`);
};

export const initLog = (debug?: boolean) => {
    DEBUG = debug === true;
};
