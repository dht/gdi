import React from 'react';
import { IWidget } from '@gdi/platformer';
import { CampaignsContainer } from '../containers/CampaignsContainer';

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
        component: (props: any) => <CampaignsContainer {...props} />,
    },
];
