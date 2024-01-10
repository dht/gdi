import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const DocsMenuMobile = lazy(() => import('./DocsMenuMobile.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.DocsMenuMobile',
    name: 'DocsMenuMobile',
    description: 'DocsMenuMobile',
    component: (instance: IElement) => <DocsMenuMobile {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
