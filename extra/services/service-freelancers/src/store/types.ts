import { StoreStructure } from 'redux-store-generator';

export type IFreelancerStore = StoreStructure & {
    meta: IGdiMeta;
    appStateFreelancer: IFreelancerState;
    upgrades: IUpgrades;
    upgradeCategories: IUpgradeCategories;
};

export type IFreelancerState = {
    stateKey: string;
    currentUpgradeId: string;
};

export type IUpgradeCategory = {
    id: string;
    name: string;
    parentId: string;
};

export type IUpgrade = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    imageThumbUrl: string;
    ratio: number;
    tags: string[];
    price: number;
    priceBeforeDiscount: number;
    dataTags: [];
    portfolio: IPortfolio[];
    freelancer: IFreelancer;
};

export type IPortfolio = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    imageThumbUrl: string;
    ratio: number;
    tags: string[];
    dataTags: [];
};

export type IFreelancer = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    imageThumbUrl: string;
    ratio: number;
    tags: string[];
    dataTags: [];
};

export type IUpgradeCategories = Record<string, IUpgradeCategory>;
export type IUpgrades = Record<string, IUpgrade>;
