import { StoreStructure } from 'redux-store-generator';

export type IBlkrStore = StoreStructure & {
    meta: IGdiMeta;
    appStateBlkr: IBlkrState;
    blkrCategories: IBlkrCategories;
    boosterScenes: IBoosterScenes;
};

export type IBlkrState = {
    stateKey: string;
    currentSceneId: string;
    serviceStatus: ServiceStatus;
};

export type IBlkrCategory = {
    id: string;
    name: string;
    description: string;
    parentId: string;
};

export type IBoosterScene = {
    id: string;
    name: string;
    description: string;
    order: number;
    imageUrl: string;
    imageThumbUrl: string;
    ratio: number;
    items: IBoosterItem[];
    tags: string[];
    dataTags: [];
    categoryId: string;
};

export type IBoosterItem = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    imageThumbUrl: string;
    ratio: number;
    tags: string[];
    price: number;
    priceBeforeDiscount: number;
    position: IPosition;
    dimensions: IDimension;
    dataTags: [];
    url: string;
};

export type IBlkrCategories = Record<string, IBlkrCategory>;
export type IBoosterScenes = Record<string, IBoosterScene>;
