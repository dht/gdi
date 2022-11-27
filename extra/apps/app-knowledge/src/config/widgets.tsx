import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const KnowledgeContainer = React.lazy(() => import('../containers/KnowledgeContainer')); // prettier-ignore

export enum KnowledgeWidgets {
    Knowledge = 'knowledge.Knowledge',
}
export const widgets: IWidget[] = [
    {
        id: KnowledgeWidgets.Knowledge,
        name: 'Knowledge',
        description: 'Knowledge',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={KnowledgeContainer}
                props={props}
            />
        ),
    },
];
