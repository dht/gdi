// AUTO-GENERATED

export const A15 = {};

declare global {
    export type IProductsStore = {
        appStateProducts: IProductsState;
        currentIdsProducts: ICurrentIdsProducts;
        products: IProducts;
    };

    export type IProductsState = {
        stateKey: string;
    };

    export type ICurrentIdsProducts = {
        productId: string;
    };

    export type ProductStatus = 'draft' | 'published' | 'archived';

    export type IProduct = {
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        imageThumbUrl: string;
        ratio: number;
        price: number;
        priceCurrency: string;
        category: string;
        status: ProductStatus;
        items: IImage[];
        tags: string[];
        dataTags: string[];
        requiresShipment?: boolean;
    };

    export type IProductLine = {
        id: string;
        productId: string;
        price: number;
        quantity: number;
        notes: string;
        dateAdded: string;
    };

    export type IProducts = Record<string, IProduct>;
}
