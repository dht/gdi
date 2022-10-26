import React from 'react';

import { IWidget } from '@gdi/platformer';
import { PplContainer } from '../containers/PplContainer';

export enum PplWidgets {
    Ppl = 'ppl.Ppl',
}
export const widgets: IWidget[] = [
    {
        id: PplWidgets.Ppl,
        name: 'Ppl',
        description: 'Ppl',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <PplContainer {...props} />,
    },
];
