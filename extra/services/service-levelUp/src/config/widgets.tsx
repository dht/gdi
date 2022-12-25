import React from 'react';

import { IWidget, Wrapper } from '@gdi/platformer';
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
            <Wrapper
                appId={APP_ID}
                component={BoostersContainer}
                props={props}
            />
        ),
    },
];
