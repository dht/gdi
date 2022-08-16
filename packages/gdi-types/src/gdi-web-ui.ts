// AUTO-GENERATED

export const A17 = {};

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
}
