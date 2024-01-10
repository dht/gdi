import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ItemPicker = lazy(() => import('./ItemPicker.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.ItemPicker',
    name: 'ItemPicker',
    description: 'ItemPicker',
    component: (instance: IElement) => <ItemPicker {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
