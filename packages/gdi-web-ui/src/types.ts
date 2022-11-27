export type IPaletteOptions = Record<string, IPalette>;

export type ISystemEvent = {
    id: number;
    timestamp?: number;
    timestampEnd?: number;
    timestampText?: string;
    isRunning?: string;
    statusText?: string;
    result?: 'success' | 'warning' | 'error';
} & Json;
