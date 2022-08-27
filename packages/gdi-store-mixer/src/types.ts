import type { StoreStructure } from 'redux-store-generator';
import { IBlockInfo } from '@gdi/engine';
import type { IImage, IImages } from '@gdi/store-site';

export type IMixerStore = StoreStructure & {
    appStateMixer: IMixerState;
    currentIds: ICurrentIds;
    meta: IMeta;
    galleryState: IGalleryState;
    blocksGalleryState: IBlocksGalleryState;
    libraryImages: IImages;
    libraryBlocks: Record<string, IBlockInfo>;
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
    showTools: boolean;
    showTagModal: boolean;
    selectedIds: string[];
    favoriteIds: string[];
    temporaryIds: string[];
    deletedIds: string[];
};

export type IBlocksFilter = 'all' | 'byType';

export type IBlocksGalleryState = {
    stateKey: string;
    mode: IGalleryViewMode;
    filter: IBlocksFilter;
    search: string;
};

export type IImageWithBlock = IImage & {
    block: IBlockInfo;
};
