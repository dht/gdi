export type IPaletteOptions = Record<string, IPalette>;

export type ISystemEvent = {
    id: number;
    timestamp?: number;
    timestampText?: string;
} & Json;
