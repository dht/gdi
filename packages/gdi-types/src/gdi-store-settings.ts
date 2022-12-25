// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A8 = {};

declare global {
    export type ISettingsStore = StoreStructure & ISettingsStructure & {};

    export type ISettingsStructure = {
        settings: ISettings;
    };

    export type ISettings = {
        stateKey: string;
    };

    export type IActiveApp = {
        id: string;
        title: string;
        nodeCount: number;
        totalSize: number;
        color: string;
        description: string;
        isActive?: boolean;
        isRequired?: boolean;
    };

    export type IActiveAppsStats = {
        count: number;
        totalNodeCount: number;
        totalSize: number;
    };

    export type IActiveService = {
        id: string;
        title: string;
        color: string;
        description: string;
        isActive?: boolean;
        isRequired?: boolean;
        apiUrl: string;
        apiToken?: string;
        refreshToken?: string;
    };

    export type IActiveServicesStats = {
        count: number;
        totalNodeCount: number;
        totalSize: number;
    };
}
