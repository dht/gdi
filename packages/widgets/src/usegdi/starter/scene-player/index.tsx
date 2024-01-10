import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ScenePlayer = lazy(() => import('./ScenePlayer.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.ScenePlayer',
    name: 'ScenePlayer',
    description: 'ScenePlayer',
    component: (instance: IElement) => <ScenePlayer {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
