import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const UpgradesContainer =  React.lazy(() => import('../containers/UpgradesContainer')); // prettier-ignore

export enum FreelancersWidgets {
    Upgrades = 'freelancers.Upgrades',
    InterestingReads = 'freelancers.InterestingReads',
}
export const widgets: IWidget[] = [
    {
        id: FreelancersWidgets.Upgrades,
        name: 'Upgrades',
        description: 'Upgrades',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={UpgradesContainer}
                props={props}
            />
        ),
    },
];
