// AUTO-GENERATED

export const A14 = {};

declare global {
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

    export type ISystemEvent = {
        id: number;
        timestamp?: number;
        timestampText?: string;
    } & Json;

    export type CellType =
        | 'image'
        | 'person'
        | 'number'
        | 'text'
        | 'tags'
        | 'date'
        | 'social';

    export type DataGridField = {
        id: string;
        title?: string;
        cellType: CellType;
        mapFields?: Json;
        flex?: number;
        params?: Json;
    };

    export type DataGridConfig = {
        id: string;
        fields: DataGridField[];
    };
}
