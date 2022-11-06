export const itemStructure = `export type IOrder = {
    id: string;
    name: string;
    cartId?: string;
    startDate: string;
    endDate: string;
    userId: string;
    status: OrderStatus;
    items: IProductLine[];
    tags: string[];
    dataTags: string[];
    imageUrl?: string;
    imageThumbUrl?: string;
    ratio?: number;
};
`;
