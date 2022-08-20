type BlockId = string;
type FlavourId = string;
type TemplateId = string;

export type IBlockInfo = {
    id: BlockId;
    name: string;
    description: string;
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

export type FieldType =
    | 'number'
    | 'number?'
    | 'text'
    | 'text?'
    | 'url'
    | 'url?'
    | 'checkbox'
    | 'checkbox?'
    | 'image'
    | 'image?';

export type FieldTypeColor = 'color' | 'color?';

export type IBlockSchemaStrings = Record<string, FieldType>;
export type IBlockSchemaColors = Record<string, FieldTypeColor>;
export type IBlockSchemaExtra = Record<string, FieldType>;

export type IBlockSchema = {
    strings: IBlockSchemaStrings;
    colors: IBlockSchemaColors;
    extra: IBlockSchemaExtra;
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

export type IAuthor = {
    name: string;
    email?: string;
    url?: string;
};

export type ITemplateInfo = {
    id: TemplateId;
    version: string;
    author?: IAuthor;
    blocksCount?: number;
};

export type IBlock = {
    id: BlockId;
    component: React.FC<any>;
    info: IBlockInfo;
};

export type IBlocks = Record<BlockId, IBlock>;

export type ITemplate = {
    blocks: IBlocks;
    templateInfo: ITemplateInfo;
};

export type ITemplates = Record<string, ITemplateInfo>;
