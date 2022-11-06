import { StoreStructure } from 'redux-store-generator';

export type IKnowledgeStore = StoreStructure & {
    appStateKnowledge: IKnowledgeState;
    linkCategories: ILinksCategories;
    links: ILinks;
};

export type IKnowledgeState = {
    stateKey: string;
    currentNodeId: string;
};

export type ILinksCategory = {
    id: string;
    name: string;
};

export type ILink = {
    id: string;
    url: string;
    category: string;
    description: string;
    revisitDate: string;
    tags: string[];
};

export type ILinksCategories = Record<string, ILinksCategory>;
export type ILinks = Record<string, ILink>;
