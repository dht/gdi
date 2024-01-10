import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MobileArrows = lazy(() => import('./MobileArrows.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.MobileArrows',
    name: 'MobileArrows',
    description: 'MobileArrows',
    component: (instance: IElement) => <MobileArrows {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
