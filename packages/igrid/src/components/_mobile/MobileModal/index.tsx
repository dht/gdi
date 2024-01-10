import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MobileModal = lazy(() => import('./MobileModal.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.MobileModal',
    name: 'MobileModal',
    description: 'MobileModal',
    component: (instance: IElement) => <MobileModal {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
