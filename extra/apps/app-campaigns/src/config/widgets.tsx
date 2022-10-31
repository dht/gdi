import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { CampaignsContainer } from '../containers/CampaignsContainer';
import { APP_ID } from './ids';

export enum CampaignsWidgets {
    Campaigns = 'campaigns.Campaigns',
}
export const widgets: IWidget[] = [
    {
        id: CampaignsWidgets.Campaigns,
        name: 'Campaigns',
        description: 'Campaigns',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={CampaignsContainer}
                props={props}
            />
        ),
    },
];
