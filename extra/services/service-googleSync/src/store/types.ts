import { StoreStructure } from 'redux-store-generator';

export type IGoogleSyncStore = StoreStructure & {
    meta: IGdiMeta;
    appStateGoogleSync: IGoogleSyncState;
    googleSyncCategories: IGoogleSyncCategories;
    boosterScenes: IBoosterScenes;
};

export type IGoogleSyncState = {
    stateKey: string;
    currentSceneId: string;
    serviceStatus: ServiceStatus;
};

export type IGoogleSyncCategory = {
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

export type IGoogleSyncCategories = Record<string, IGoogleSyncCategory>;
export type IBoosterScenes = Record<string, IBoosterScene>;
