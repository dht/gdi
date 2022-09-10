import { routes } from './routes';
import { FactoryWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    factory: [
        {
            id: 'FactoryPanel',
            widgetId: FactoryWidgets.FactoryPanel,
            position: { y: 1, x: 100 },
            dimension: { y: 48, x: 33 },
            isTransparent: false,
        },
        {
            id: 'Factory',
            widgetId: FactoryWidgets.Factory,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
            allowOverflow: false,
        },

        {
            id: 'ImportExport',
            title: 'ImportExport',
            widgetId: FactoryWidgets.ImportExport,
            position: { y: 7, x: 80 },
            dimension: { y: 5, x: 5 },
            isFloating: true,
            hideHeader: false,
        },

        {
            id: 'DesignerTree',
            widgetId: FactoryWidgets.DesignerTree,
            position: { y: 28, x: 90 },
            dimension: { y: 1, x: 1 },
            allowOverflow: true,
            isTransparent: true,
        },
    ],
};
