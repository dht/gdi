export type IImage = {
    id: string | number;
    title: string;
    imageUrl: string;
    imageThumbUrl: string;
    ratio: number;
    tags: string[];
    isFavorite?: boolean;
    isTemporary?: boolean;
};
