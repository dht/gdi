export type TilePosition =
    | 'top'
    | 'left'
    | 'right'
    | 'center'
    | 'bottom'
    | 'queue1'
    | 'queue2';

export type ITile = {
    id: string;
    position?: TilePosition;
    color: string;
    recycleOn?: number;
    isRecycled?: boolean;
};

export type ITiles = ITile[];

export type ITilesByPosition = Partial<Record<TilePosition, string>>;
