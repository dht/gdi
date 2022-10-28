import React from 'react';
import { IWidget } from '@gdi/platformer';
import { LeadsContainer } from '../containers/LeadsContainer';

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
        component: (props: any) => <LeadsContainer {...props} />,
    },
];
