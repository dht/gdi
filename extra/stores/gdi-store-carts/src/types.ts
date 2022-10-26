export type ICartsStore = {
    appStateCarts: ICartsState;
    currentIdsCarts: ICurrentIdsCarts;
    carts: ICarts;
};

export type ICartsState = {
    stateKey: string;
};

export type ICurrentIdsCarts = {
    cartId: string;
};

export type CartStatus = 'draft' | 'purchased' | 'abandoned';

export type ICart = {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    userId: string;
    status: CartStatus;
    items: IProductLine[];
    tags: string[];
    dataTags: string[];
    imageUrl?: string;
    imageThumbUrl?: string;
    ratio?: number;
};

export type ICartJournal = {
    id: string;
    cartId: string;
    title: string;
    entryDate: string;
};

export type ICarts = Record<string, ICart>;
export type ICartJournals = Record<string, ICartJournal>;
