import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const RetroUnix = lazy(() => import('./RetroUnix.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.RetroUnix',
    name: 'RetroUnix',
    description: 'RetroUnix',
    component: (instance: IElement) => <RetroUnix {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
