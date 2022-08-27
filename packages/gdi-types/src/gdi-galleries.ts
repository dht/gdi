// AUTO-GENERATED

export const A1 = {};

declare global {
    export type IImage = {
        id: string;
        title: string;
        imageUrl: string;
        imageThumbUrl: string;
        ratio: number;
        tags: string[];
        isFavorite?: boolean;
        isTemporary?: boolean;
    };

    export type IImages = Record<string, IImage>;

    export type ImageActionType =
        | 'select'
        | 'unselect'
        | 'edit'
        | 'delete'
        | 'addTag'
        | 'removeTag'
        | 'addToFavorites'
        | 'removeFromFavorites'
        | 'addToTemporary'
        | 'removeFromTemporary';
}
