import type { StoreStructure } from 'redux-store-generator';

export type IMixerStore = StoreStructure & {
    appStateMixer: IMixerState;
    currentIds: ICurrentIds;
    meta: IMetaMixer;
    galleryState: IGalleryState;
    widgetGalleryState: IWidgetGalleryState;
    libraryImages: IImages;
    libraryWidgets: IWidgets;
    libraryTypography: ITypographyOptions;
    libraryPalettes: IPaletteOptions;
    locales: ILocaleOptions;
    packages: IPackages;
};

export type IViewMode = 'visual' | 'structure' | 'wireframe' | 'code';

export type IMixerState = {
    stateKey: string;
    mode: IViewMode;
    selectedToolId: string;
    paletteId: string;
    showImageUploadModal: boolean;
    showPlayModeMessage: boolean;
};

export type ICurrentIds = {
    pageId: string;
    selectedInstanceId: string;
    contentInstanceId: string;
    libraryInstanceId: string;
    fieldId: string;
};

export type IMetaMixer = {
    schemaVersion: string;
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

export type IGalleryViewMode = 'full' | 'minimal';

export type IGalleryState = {
    stateKey: string;
    mode: IGalleryViewMode;
    selectedToolId: string;
    search: string;
    tag: string;
    showTools: boolean;
    showTagModal: boolean;
    selectedIds: string[];
    favoriteIds: string[];
    temporaryIds: string[];
    deletedIds: string[];
};

export type IWidgetsFilter = 'all' | 'byType';

export type IWidgetGalleryState = {
    stateKey: string;
    mode: IGalleryViewMode;
    filter: IWidgetsFilter;
    search: string;
};

export type IImageWithWidget = IImage & {
    widget: IWidget;
};
