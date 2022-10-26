import React from 'react';
import { IWidget } from '@gdi/platformer';
import { ProductsContainer } from '../containers/ProductsContainer';

export enum ProductsWidgets {
    Products = 'products.Products',
}
export const widgets: IWidget[] = [
    {
        id: ProductsWidgets.Products,
        name: 'Products',
        description: 'Products',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ProductsContainer {...props} />,
    },
];
