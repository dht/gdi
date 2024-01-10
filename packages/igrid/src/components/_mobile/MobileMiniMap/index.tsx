import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MobileMiniMap = lazy(() => import('./MobileMiniMap.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.MobileMiniMap',
    name: 'MobileMiniMap',
    description: 'MobileMiniMap',
    component: (instance: IElement) => <MobileMiniMap {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
