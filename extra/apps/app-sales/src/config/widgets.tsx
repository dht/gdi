import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const SalesContainer = React.lazy(() => import('../containers/SalesContainer')); // prettier-ignore

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
