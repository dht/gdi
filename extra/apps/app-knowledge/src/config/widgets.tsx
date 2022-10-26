import React from 'react';
import { IWidget } from '@gdi/platformer';
import { KnowledgeContainer } from '../containers/KnowledgeContainer';

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
        component: (props: any) => <KnowledgeContainer {...props} />,
    },
];
