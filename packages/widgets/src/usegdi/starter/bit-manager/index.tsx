import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const BitManager = lazy(() => import('./BitManager.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.BitManager',
    name: 'BitManager',
    description: 'BitManager',
    component: (instance: IElement) => <BitManager {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
