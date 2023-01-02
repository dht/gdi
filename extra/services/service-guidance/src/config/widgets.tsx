import React from 'react';
import { IWidget, ServiceWrapper } from '@gdi/platformer';
import { serviceConfig } from './service';
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
            <ServiceWrapper
                appId={APP_ID}
                component={GuidanceContainer}
                serviceConfig={serviceConfig}
                props={props}
            />
        ),
    },
];
