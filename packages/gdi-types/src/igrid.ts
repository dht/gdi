// AUTO-GENERATED

export const A28 = {};

declare global {
    export type PageId = string;
    export type WidgetId = string;
    export type FlavourId = string;

    export type ICoordinates = {
        x: number;
        y: number;
    };

    export type IDimension = {
        x: number;
        y: number;
    };

    export type IWidget = {
        id: WidgetId;
        name: string;
        description?: string;
        component?: (props?: any) => JSX.Element;
        defaultDimension?: IDimension;
        tags?: string[];
        dataTags?: string[];
        widgetType?: string;
        params?: IWidgetParams;
        sampleData?: ISampleDataPerFlavour;
        dimensions?: IDimensionsPerFlavour;
        screenshots?: IScreenshotsPerFlavour;
        isBlock?: boolean;
    };

    export type IWidgets = Record<string, IWidget>;

    export type IWidgetInstance = {
        id: string;
        widgetId: string;
        title?: string;
        position?: ICoordinates;
        dimension?: IDimension;
        overlayRoute?: string;
        hideHeader?: boolean;
        isTransparent?: boolean;
        allowOverflow?: boolean;
        selfPosition?: boolean;
        flavour?: string;
        isHidden?: boolean;
        isFullPage?: boolean;
        isFloating?: boolean;
        isPlaceholder?: boolean;
        placeholderType?: string;
        pageId?: string;
        pageInstanceId?: string;
        locationId?: string;
        order?: number;
        // transient
        widget?: IWidget;
        instanceProps?: Json;
        widgetType?: string;
        thumbUrl?: string;
        thumbRatio?: number;
        isPopulated?: boolean;
    };

    export type IElement = IWidgetInstance;

    export type IWidgetHeaderDetails = {
        title?: string;
        description?: string;
    };

    export type IWidgetInstances = Record<string, IWidgetInstance>;
    export type IWidgetInstancesList = IWidgetInstance[];
    export type IWidgetInstancesByPageList = Record<
        PageId,
        IWidgetInstancesList
    >;
    export type IWidgetInstancesByPageDictionary = Record<
        PageId,
        IWidgetInstances
    >;

    export enum IMode {
        VIEW = 'VIEW',
        EDIT_PICK = 'EDIT_PICK',
        EDIT_DRAW = 'EDIT_DRAW',
    }

    export enum IEditModeStage {
        IDLE = 'IDLE',
        PICKING = 'PICKING',
        DRAWING = 'DRAWING',
        POSITIONING = 'POSITIONING',
    }

    export type IGridOptions = {
        cellWidth: number;
        cellHeight: number;
    };

    export type IBoundingBox = {
        top: number;
        left: number;
        width: number;
        height: number;
    };

    export type IGridPosition = ICoordinates & {
        rawPixels: {
            top: number;
            left: number;
            absoluteTop: number;
            absoluteLeft: number;
        };
    };

    export type WidgetLibrary = Record<string, React.FC>;

    export interface IWidgetLibraryBuilder {
        withWidgets: (widgets: IWidget[]) => IWidgetLibraryBuilder;
        build: () => IWidgets;
    }

    export type IWidgetParams = {
        id: WidgetId;
        schema: IWidgetSchema;
    };

    export type IWidgetSchemaGroup = Record<string, FieldParams>;

    export type IWidgetSchema = {
        strings: IWidgetSchemaGroup;
        colors: IWidgetSchemaGroup;
        extra: IWidgetSchemaGroup;
    };

    export type SchemaFieldType =
        | 'number'
        | 'text'
        | 'longText'
        | 'url'
        | 'checkbox'
        | 'image'
        | 'color'
        | 'dataset'
        | 'icon'
        | 'json';

    export type FieldParams = {
        fieldType: SchemaFieldType;
        isRequired?: boolean;
        order: number;
    };

    export type ISampleData = {
        id: string;
        strings: Json;
        colors: Json;
        extra: Json;
        container?: IWidthHeight;
    };

    export type ISampleDataPerFlavour = Record<FlavourId, ISampleData>;

    export type IWidthHeight = {
        width: number;
        height: number;
        ratio: number;
    };

    export type IDimensions = {
        desktop: IWidthHeight;
        mobile: IWidthHeight;
    };

    export type IDimensionsPerFlavour = Record<FlavourId, IDimensions>;

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

    export type IImageInfo = {
        url?: string;
        width: number;
        height: number;
        ratio: number;
        urlIsRemote?: boolean;
    };

    export type IScreenshotsPerFlavour = Record<FlavourId, IScreenshots>;
}
