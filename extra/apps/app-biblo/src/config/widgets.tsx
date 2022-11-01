import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { InterestingReadsContainer } from '../containers/InterestingReadsContainer';
import { APP_ID } from './ids';

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

        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={InterestingReadsContainer}
                props={props}
            />
        ),
    },
];
