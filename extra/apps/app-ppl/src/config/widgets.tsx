import React from 'react';

import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const PplContainer = React.lazy(() => import('../containers/PplContainer')); // prettier-ignore

export enum PplWidgets {
    Ppl = 'ppl.Ppl',
}
export const widgets: IWidget[] = [
    {
        id: PplWidgets.Ppl,
        name: 'Ppl',
        description: 'Ppl',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={PplContainer} props={props} />
        ),
    },
];
