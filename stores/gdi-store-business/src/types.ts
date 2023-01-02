import type { StoreStructure } from 'redux-store-generator';

export type IBusinessStore = StoreStructure & {
    meta: IGdiMeta;
    business: IBusiness;
};

export type IBusiness = {
    name: string;
    domain: string;
    city: string;
    country: string;
    contactName?: string;
    contactEmail?: string;
    contactPhone?: string;
    shippingAddress?: string;
};
