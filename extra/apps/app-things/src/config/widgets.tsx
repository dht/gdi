import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const ThingsContainer = React.lazy(() => import('../containers/ThingsContainer')); // prettier-ignore

export enum ThingsWidgets {
    Sheets = 'things.Sheets',
}
export const widgets: IWidget[] = [
    {
        id: ThingsWidgets.Sheets,
        name: 'Things',
        description: 'Things',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={ThingsContainer} props={props} />
        ),
    },
];
