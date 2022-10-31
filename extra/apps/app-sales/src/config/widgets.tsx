import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { SalesContainer } from '../containers/SalesContainer';
import { APP_ID } from './ids';

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
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={SalesContainer} props={props} />
        ),
    },
];
