import React from 'react';
import { IWidget } from '@gdi/platformer';
import { CommentsContainer } from '../containers/CommentsContainer';

export enum CommentsWidgets {
    Comments = 'comments.Comments',
}
export const widgets: IWidget[] = [
    {
        id: CommentsWidgets.Comments,
        name: 'Comments',
        description: 'Comments',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <CommentsContainer {...props} />,
    },
];
