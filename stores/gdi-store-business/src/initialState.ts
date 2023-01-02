import { generateReducersForStore } from 'redux-store-generator';
import { IBusinessStore } from './types';
import p from '../package.json';

export const initialState: IBusinessStore = {
    meta: {
        packageType: p.gdi.packageType as GdiEntity,
        version: p.version,
        description: p.description,
        isDraft: p.gdi.isDraft,
        isBeta: p.gdi.isBeta,
    },
    business: {
        name: '',
        domain: '',
        city: '',
        country: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        shippingAddress: '',
    },
};

export const reducers = generateReducersForStore<IBusinessStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {});
    return store;
};
