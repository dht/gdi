import React from 'react';
import { IWidget, ServiceWrapper } from '@gdi/platformer';
import { serviceConfig } from './service';
import { APP_ID } from './ids';

const BlkrGalleryContainer =  React.lazy(() => import('../containers/BlkrGalleryContainer')); // prettier-ignore

export enum BlkrWidgets {
    BlkrGallery = 'blkr.BlkrGallery',
    Boosters = 'levelup.Boosters',
}
export const widgets: IWidget[] = [
    {
        id: BlkrWidgets.BlkrGallery,
        name: 'BlkrGallery',
        description: 'BlkrGallery',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <ServiceWrapper
                appId={APP_ID}
                component={BlkrGalleryContainer}
                serviceConfig={serviceConfig}
                props={props}
            />
        ),
    },
];
