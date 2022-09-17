import { LayoutFlex } from './layout-flex/LayoutFlex';
import { widgetInfo as LayoutFlexInfo } from './layout-flex';

export const widgets: IWidgets = {
    'com.usegdi.templates.layout.layout-flex': {
        ...LayoutFlexInfo,
        component: LayoutFlex,
    },
};
