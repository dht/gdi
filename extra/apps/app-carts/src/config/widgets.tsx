import React from 'react';
import { IWidget } from '@gdi/platformer';
import { CartsContainer } from '../containers/CartsContainer';

export enum CartsWidgets {
    Carts = 'carts.Carts',
}
export const widgets: IWidget[] = [
    {
        id: CartsWidgets.Carts,
        name: 'Carts',
        description: 'Carts',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <CartsContainer {...props} />,
    },
];
