// AUTO-GENERATED

export const A16 = {};

declare global {
    export type PageId = string;
    export type WidgetId = string;

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
        description: string;
        component?: (props?: any) => JSX.Element;
        defaultDimension: IDimension;
        tags?: string[];
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
        flavour?: string;
        isHidden?: boolean;
        isFullPage?: boolean;
        isFloating?: boolean;
        isPlaceholder?: boolean;
        placeholderType?: string;
        pageId?: string;
        order?: number;
    };

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
}
