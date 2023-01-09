import { StoreStructure } from 'redux-store-generator';

export type IGuidanceStore = StoreStructure & {
    meta: IGdiMeta;
    appStateGuidance: IGuidanceState;
    bmsFeatures: IBmsFeatures;
    businessDomains: IBusinessDomains;
    rankings: IRankings;
    requirements: IRequirements;
};

export type IGuidanceState = {
    stateKey: string;
    currentDomainId: string;
    currentFeatureId: string;
    serviceStatus: ServiceStatus;
};

export type IBmsFeature = {
    id: string;
    name: string;
    parentId: string;
};

export type IBusinessDomain = {
    id: string;
    name: string;
    parentId: string;
};

export type IRanking = {
    id: string;
    domainId: string;
    rank: number;
};

export type IRequirement = {
    id: string;
    bmsFeatureId: string;
    isRequired: boolean;
    strength: number;
};

export type IBmsFeatures = Record<string, IBmsFeature>;
export type IBusinessDomains = Record<string, IBusinessDomain>;
export type IRankings = Record<string, IRanking>;
export type IRequirements = Record<string, IRequirement>;
