import { StoreStructure } from 'redux-store-generator';

export type ILevelUpStore = StoreStructure & {
    meta: IGdiMeta;
    appStateLevelUp: ILevelUpState;
    levelUpCategories: ILevelUpCategories;
    boosterScenes: IBoosterScenes;
};

export type ILevelUpState = {
    stateKey: string;
    currentSceneId: string;
};

export type ILevelUpCategory = {
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

export type ILevelUpCategories = Record<string, ILevelUpCategory>;
export type IBoosterScenes = Record<string, IBoosterScene>;
