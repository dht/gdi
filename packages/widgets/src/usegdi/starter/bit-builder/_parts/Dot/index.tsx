import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Dot = lazy(() => import('./Dot.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.Dot',
    name: 'Dot',
    description: 'Dot',
    component: (instance: IElement) => <Dot {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
