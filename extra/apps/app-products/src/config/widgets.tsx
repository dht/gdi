import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { ProductsContainer } from '../containers/ProductsContainer';
import { APP_ID } from './ids';

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
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ProductsContainer}
                props={props}
            />
        ),
    },
];
