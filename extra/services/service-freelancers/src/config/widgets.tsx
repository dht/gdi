import React from 'react';
import { IWidget, ServiceWrapper } from '@gdi/platformer';
import { serviceConfig } from './service';
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
            <ServiceWrapper
                appId={APP_ID}
                component={UpgradesContainer}
                serviceConfig={serviceConfig}
                props={props}
            />
        ),
    },
];
