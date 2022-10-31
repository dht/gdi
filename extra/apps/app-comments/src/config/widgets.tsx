import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { CommentsContainer } from '../containers/CommentsContainer';
import { APP_ID } from './ids';

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
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={CommentsContainer}
                props={props}
            />
        ),
    },
];
