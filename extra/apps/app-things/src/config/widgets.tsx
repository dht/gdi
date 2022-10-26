import React from 'react';
import { IWidget } from '@gdi/platformer';
import { ThingsContainer } from '../containers/ThingsContainer';

export enum ThingsWidgets {
    Sheets = 'things.Sheets',
}
export const widgets: IWidget[] = [
    {
        id: ThingsWidgets.Sheets,
        name: 'Things',
        description: 'Things',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ThingsContainer {...props} />,
    },
];
