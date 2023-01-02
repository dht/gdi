import React from 'react';
import { IWidget, ServiceWrapper } from '@gdi/platformer';
import { serviceConfig } from './service';
import { APP_ID } from './ids';

const BoostersContainer =  React.lazy(() => import('../containers/BoostersContainer')); // prettier-ignore

export enum LevelUpWidgets {
    Boosters = 'levelup.Boosters',
}
export const widgets: IWidget[] = [
    {
        id: LevelUpWidgets.Boosters,
        name: 'Boosters',
        description: 'Boosters',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <ServiceWrapper
                appId={APP_ID}
                component={BoostersContainer}
                serviceConfig={serviceConfig}
                props={props}
            />
        ),
    },
];
