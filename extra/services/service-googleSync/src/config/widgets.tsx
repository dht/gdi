import React from 'react';
import { IWidget, ServiceWrapper } from '@gdi/platformer';
import { serviceConfig } from './service';
import { APP_ID } from './ids';

const SyncConfigContainer =  React.lazy(() => import('../containers/SyncConfigContainer')); // prettier-ignore

export enum GoogleSyncWidgets {
    SyncConfig = 'googlesync.SyncConfig',
    Boosters = 'levelup.Boosters',
}
export const widgets: IWidget[] = [
    {
        id: GoogleSyncWidgets.SyncConfig,
        name: 'SyncConfig',
        description: 'SyncConfig',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <ServiceWrapper
                appId={APP_ID}
                component={SyncConfigContainer}
                serviceConfig={serviceConfig}
                props={props}
            />
        ),
    },
];
