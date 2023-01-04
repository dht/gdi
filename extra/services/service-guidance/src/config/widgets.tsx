import React from 'react';

import { IWidget, ServiceWrapper } from '@gdi/platformer';
import { serviceConfig } from './service';
import { APP_ID } from './ids';

const GuidanceIntroContainer =  React.lazy(() => import('../containers/GuidanceIntroContainer')); // prettier-ignore
const GuidanceRankingContainer =  React.lazy(() => import('../containers/GuidanceRankingContainer')); // prettier-ignore
const GuidanceBusinessInfoContainer =  React.lazy(() => import('../containers/GuidanceBusinessInfoContainer')); // prettier-ignore
const GuidanceFeaturesContainer =  React.lazy(() => import('../containers/GuidanceFeaturesContainer')); // prettier-ignore

export enum GuidanceWidgets {
    GuidanceBusinessInfo = 'guidance.GuidanceBusinessInfo',
    GuidanceRanking = 'guidance.GuidanceRanking',
    GuidanceIntro = 'guidance.GuidanceIntro',
    GuidanceFeatures = 'guidance.GuidanceFeatures',
}
export const widgets: IWidget[] = [
    {
        id: GuidanceWidgets.GuidanceBusinessInfo,
        name: 'GuidanceBusinessInfo',
        description: 'GuidanceBusinessInfo',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <ServiceWrapper
                appId={APP_ID}
                component={GuidanceBusinessInfoContainer}
                serviceConfig={serviceConfig}
                props={props}
            />
        ),
    },
    {
        id: GuidanceWidgets.GuidanceRanking,
        name: 'GuidanceRanking',
        description: 'GuidanceRanking',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <ServiceWrapper
                appId={APP_ID}
                component={GuidanceRankingContainer}
                serviceConfig={serviceConfig}
                props={props}
            />
        ),
    },
    {
        id: GuidanceWidgets.GuidanceIntro,
        name: 'GuidanceIntro',
        description: 'GuidanceIntro',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <ServiceWrapper
                appId={APP_ID}
                component={GuidanceIntroContainer}
                serviceConfig={serviceConfig}
                props={props}
            />
        ),
    },
    {
        id: GuidanceWidgets.GuidanceFeatures,
        name: 'GuidanceFeatures',
        description: 'GuidanceFeatures',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <ServiceWrapper
                appId={APP_ID}
                component={GuidanceFeaturesContainer}
                serviceConfig={serviceConfig}
                props={props}
            />
        ),
    },
];
