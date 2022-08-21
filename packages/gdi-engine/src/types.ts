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

export type SchemaFieldType =
    | 'number'
    | 'text'
    | 'longText'
    | 'url'
    | 'checkbox'
    | 'image'
    | 'color';

export type FieldParams = {
    fieldType: SchemaFieldType;
    isRequired?: boolean;
    order: number;
};

export type IBlockSchemaGroup = Record<string, FieldParams>;

export type IBlockSchema = {
    strings: IBlockSchemaGroup;
    colors: IBlockSchemaGroup;
    extra: IBlockSchemaGroup;
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

export type IEngineContextState = {
    isReady: boolean;
    blocks: IBlocks;
    patchContext: (change: Partial<IEngineContextState>) => void;
};

export type ISiteContext = {
    menuItems: IMenuItem[];
    patchContext: (change: Partial<ISiteContext>) => void;
};

export type IMenuItem = {
    href: string;
    title: string;
};

export declare type IBlockInstance = {
    id: string;
    blockId: string;
    title?: string;
    overlayRoute?: string;
    hideHeader?: boolean;
    isTransparent?: boolean;
    allowOverflow?: boolean;
    flavour?: string;
    isHidden?: boolean;
    isFullPage?: boolean;
    isFloating?: boolean;
    isPlaceholder?: boolean;
    placeholderType?: string;
    pageId?: string;
    order?: number;
};
