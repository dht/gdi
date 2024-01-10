import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const EffectPicker = lazy(() => import('./EffectPicker.container'));

export const widget: IWidget = {
    id: 'com.usegdi.starter.EffectPicker',
    name: 'EffectPicker',
    description: 'EffectPicker',
    component: (instance: IElement) => <EffectPicker {...(instance.props as any)} />,
    size: {
        defaultSize: {
            x: 10,
            y: 10,
        },
    },
    tags: ['starter'],
};

export default widget;
