import type {
    IWidget,
    IWidgetInstance,
    IWidgetInstances,
    IWidgets,
} from 'igrid';
import type { StoreStructure } from 'redux-store-generator';

export type IMixerStore = StoreStructure & {
    appStateMixer: IMixerState;
    currentIds: ICurrentIds;
    meta: IMeta;
    locale: ILocale;
    galleryState: IGalleryState;
    pages: IPages;
    libraryImages: IImages;
    libraryBlocks: IWidgets;
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
};

export type ICurrentIds = {
    pageId: string;
    selectedInstanceId: string;
    contentInstanceId: string;
    libraryInstanceId: string;
};

export type IMeta = {
    schemaVersion: string;
};

export type ILocale = {
    localeId: string;
    isRtl: boolean;
};

export type IPage = {
    id: string;
    title: string;
    description: string;
    iconName?: string;
    order?: number;
};

export type IPages = Record<string, IPage>;

export type ITypography = {
    id: string;
    title: string;
    fontFamily: string;
    link: string;
};

export type ITypographyOptions = Record<string, ITypography>;

export type IColorPalette = {
    id: string;
    title: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
};

export type IPaletteOptions = Record<string, IColorPalette>;

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
    showUploadModal: boolean;
    showTools: boolean;
    editModalImageId: string;
    selectedIds: string[];
};

export type IImage = {
    id: string | number;
    title: string;
    imageUrl: string;
    imageThumbUrl: string;
    ratio: number;
    tags: string[];
    isFavorite?: boolean;
    isTemporary?: boolean;
};

export type IImages = Record<string, IImage>;

// ======================= SELECTORS OUTPUT =======================
export type IElement = IWidgetInstance & {
    widget: IWidget;
    elementType: string;
    instanceProps?: Json;
};
