import { routes } from './routes';
import { FactoryWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    layouts: [
        {
            id: 'layouts',
            widgetId: FactoryWidgets.Layouts,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
            allowOverflow: false,
        },
    ],
    layout: [
        {
            id: 'FactoryPanel',
            widgetId: FactoryWidgets.FactoryPanel,
            position: { y: 1, x: 100 },
            dimension: { y: 48, x: 33 },
            isTransparent: false,
        },
        {
            id: 'Layout',
            widgetId: FactoryWidgets.Layout,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
            allowOverflow: false,
        },

        {
            id: 'ImportExportLayouts',
            title: 'Export',
            widgetId: FactoryWidgets.ImportExportLayouts,
            position: { y: 7, x: 80 },
            dimension: { y: 3, x: 5 },
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
        {
            id: 'PropertiesModal',
            widgetId: FactoryWidgets.Properties,
            position: { y: 1, x: 1 },
            dimension: { y: 1, x: 1 },
            allowOverflow: true,
            isTransparent: true,
        },
    ],
    articles: [
        {
            id: 'articles',
            widgetId: FactoryWidgets.Articles,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
            allowOverflow: false,
        },
    ],
    articleEditor: [
        {
            id: 'articleEditor',
            widgetId: FactoryWidgets.ArticleEditor,
            position: { y: 0, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
            allowOverflow: true,
            isFullPage: true,
        },
    ],
};
