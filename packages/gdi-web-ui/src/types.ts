type BlockId = string;
type FlavourId = string;

export type IBlockInfo = {
    id: BlockId;
    params: IBlockParams;
    sampleData: ISampleDataPerFlavour;
    dimensions: IDimensionsPerFlavour;
    screenshots: IScreenshotsPerFlavour;
    tags: string[];
};

export type IBlockParams = {
    id: BlockId;
    schema: IBlockSchema;
};

export type ISampleData = {
    id: string;
    strings: Json;
    colors: Json;
    extra: Json;
};

export type ISampleDataPerFlavour = Record<FlavourId, ISampleData>;

export type IBlockSchema = {
    strings: Json;
    colors: Json;
    extra: Json;
};

export type IImageInfo = {
    url?: string;
    width: number;
    height: number;
    ratio: number;
    urlIsRemote?: boolean;
};

export type IDimensions = {
    desktop: IImageInfo;
    mobile: IImageInfo;
};

export type IScreenshots = {
    desktop: {
        large: IImageInfo;
        thumb: IImageInfo;
    };
    mobile: {
        large: IImageInfo;
        thumb: IImageInfo;
    };
};

export type IDimensionsPerFlavour = Record<FlavourId, IDimensions>;
export type IScreenshotsPerFlavour = Record<FlavourId, IScreenshots>;
