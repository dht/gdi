import React from 'react';
import { IWidget } from '@gdi/platformer';
import { InterestingReadsContainer } from '../containers/InterestingReadsContainer';

export enum BibloWidgets {
    InterestingReads = 'biblo.InterestingReads',
}
export const widgets: IWidget[] = [
    {
        id: BibloWidgets.InterestingReads,
        name: 'InterestingReads',
        description: 'InterestingReads',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <InterestingReadsContainer {...props} />,
    },
];
