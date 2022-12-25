import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const GuidanceContainer =  React.lazy(() => import('../containers/GuidanceContainer')); // prettier-ignore

export enum GuidanceWidgets {
    Guidance = 'guidance.Guidance',
}
export const widgets: IWidget[] = [
    {
        id: GuidanceWidgets.Guidance,
        name: 'Guidance',
        description: 'Guidance',
        defaultDimension: {
            y: 16,
            x: 12,
        },

        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={GuidanceContainer}
                props={props}
            />
        ),
    },
];
