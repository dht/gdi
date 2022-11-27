// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A9 = {};

declare global {
    export type IMixerStore = StoreStructure & {
        meta: IGdiMeta;
        appStateMixer: IMixerState;
        currentIds: ICurrentIds;
        locales: ILocaleOptions;
        libraryPages: IPages;
        libraryPageInstances: IPageInstances;
        libraryInstances: IWidgetInstances;
        libraryInstancesProps: Json;
        libraryWidgets: IWidgets;
        libraryImages: IImages;
        libraryPalettes: IPaletteOptions;
        libraryTypography: ITypographyOptions;
        datasets: Json;
        packages: IPackages;
    };

    export type IMixerState = {
        stateKey: string;
        mode: IViewMode;
        panelLibraryFlavour: string;
        paletteId: string;
        showImageUploadModal: boolean;
        showPlayModeMessage: boolean;
        showMixerTree: boolean;
        showConsoleLogs: boolean;
        mobileMode: boolean;
    };

    export type ICurrentIds = {
        pageId: string;
        pageInstanceId: string;
        selectedInstanceId: string;
        contentInstanceId: string;
        libraryInstanceId: string;
        zoomWidgetId: string;
        fieldId: string;
        resolution: IResolution;
    };

    export type ITypography = {
        id: string;
        title: string;
        fontFamily: string;
        link: string;
    };

    export type ITypographyOptions = Record<string, ITypography>;

    export type ILocaleOption = {
        id: string;
        title: string;
    };

    export type ILocaleOptions = Record<string, ILocaleOption>;

    export type IPackages = Json;

    export type IImageWithWidget = IImage & {
        widget: IWidget;
    };
}
