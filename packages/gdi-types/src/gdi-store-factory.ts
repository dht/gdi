// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A13 = {};

declare global {
    export type IFactoryStore = StoreStructure & {
        appStateFactory: IFactoryState;
        currentIdsFactory: ICurrentIdsFactory;
        layouts: ILayouts;
    };

    export type IFactoryState = {
        stateKey: string;
        mode: IViewMode;
        selectedToolId: string;
        showItemsInTable: boolean;
        showPropertiesModal: boolean;
        isLoadingLayoutItems: boolean;
    };

    export type ICurrentIdsFactory = {
        layoutId: string;
        flexEntityId: string;
        widgetId: string;
        resolutionId: string;
    };

    export type ILocation = {
        id: string;
        name: string;
    };

    export type ILocations = Record<string, ILocation>;

    export type ILayout = {
        id: string;
        name: string;
        items: IFlexEntities;
    };

    export type ILayouts = Record<string, ILayout>;

    export type IFlexEntity = {
        id: string;
        parentId: string;
        locationId?: string;
        entityType: 'container' | 'item';
        direction?: 'row' | 'column';
        resolution: IResolution;
        order?: number;
        flex?: number;
        style?: Json;
        props?: Json;
        isLocked?: boolean;
    };

    export type IFlexEntities = IFlexEntity[];

    export type IResolution =
        | 'mobile'
        | 'tablet'
        | '720p'
        | 'HD'
        | 'HD+'
        | '1080p'
        | '2k'
        | '4k';
}
