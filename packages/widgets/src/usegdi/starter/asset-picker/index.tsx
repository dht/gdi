import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const AssetPicker = lazy(() => import('./AssetPicker.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.AssetPicker',
    name: 'AssetPicker',
    description: 'AssetPicker',
    component: (instance: IElement) => <AssetPicker {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
