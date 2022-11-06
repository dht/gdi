export const itemStructure = `export type ICart = {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    userId: string;
    status: CartStatus;
    items: IProductLine[];
    tags: string[];
    dataTags: string[];
    imageUrl?: string;
    imageThumbUrl?: string;
    ratio?: number;
};
`;
