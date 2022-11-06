export const itemStructure = `export type IProduct = {
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
`;
