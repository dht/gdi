import { StoreStructure } from 'redux-store-generator';

export type IGuidanceStore = StoreStructure & {
    meta: IGdiMeta;
    appStateGuidance: IGuidanceState;
    requiredFeatures: IRequiredFeatures;
    requiredDomains: IRequiredDomains;
    rankedDomains: IRankedDomains;
};

export type IGuidanceState = {
    stateKey: string;
    currentDomainId: string;
    currentFeatureId: string;
};

export type IRequiredFeature = {
    id: string;
    name: string;
    parentId: string;
};

export type IRequiredDomain = {
    id: string;
    name: string;
    parentId: string;
};

export type IRankedDomain = {
    id: string;
    name: string;
    parentId: string;
    rank: number;
};

export type IRequiredFeatures = Record<string, IRequiredFeature>;
export type IRequiredDomains = Record<string, IRequiredDomain>;
export type IRankedDomains = Record<string, IRankedDomain>;
