import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const CartsContainer = React.lazy(() => import('../containers/CartsContainer')); // prettier-ignore

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
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={CartsContainer} props={props} />
        ),
    },
];
