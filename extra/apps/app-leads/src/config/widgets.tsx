import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const LeadsContainer = React.lazy(() => import('../containers/LeadsContainer')); // prettier-ignore

export enum LeadsWidgets {
    Leads = 'leads.Leads',
}
export const widgets: IWidget[] = [
    {
        id: LeadsWidgets.Leads,
        name: 'Leads',
        description: 'Leads',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={LeadsContainer} props={props} />
        ),
    },
];
