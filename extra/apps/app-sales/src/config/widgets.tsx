import React from 'react';
import { IWidget } from '@gdi/platformer';
import { SalesContainer } from '../containers/SalesContainer';

export enum SalesWidgets {
    Sales = 'sales.Sales',
}
export const widgets: IWidget[] = [
    {
        id: SalesWidgets.Sales,
        name: 'Sales',
        description: 'Sales',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <SalesContainer {...props} />,
    },
];
