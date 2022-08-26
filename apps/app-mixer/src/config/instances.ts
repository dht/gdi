import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { MixerWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    mixer: [
        {
            id: 'Mixer',
            widgetId: MixerWidgets.Mixer,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: true,
            allowOverflow: false,
        },
        {
            id: 'MixerPanel',
            widgetId: MixerWidgets.MixerPanel,
            position: { y: 1, x: 100 },
            dimension: { y: 48, x: 33 },
            isTransparent: false,
        },
        {
            id: 'Tools',
            widgetId: MixerWidgets.Tools,
            position: { y: 5, x: 5 },
            dimension: { y: 12, x: 3 },
            isFloating: true,
        },
        {
            id: 'Views',
            widgetId: MixerWidgets.Views,
            position: { y: 2, x: 5 },
            dimension: { y: 2, x: 6 },
            isFloating: true,
            isTransparent: true,
        },
        {
            id: 'ImportExport',
            title: 'ImportExport',
            widgetId: MixerWidgets.ImportExport,
            position: { y: 7, x: 80 },
            dimension: { y: 5, x: 5 },
            isFloating: true,
            hideHeader: false,
        },
        {
            id: 'KeyboardShortcuts',
            title: 'KeyboardShortcuts',
            widgetId: MixerWidgets.KeyboardShortcuts,
            position: { y: 18, x: 5 },
            dimension: { y: 2, x: 3 },
            isFloating: true,
        },
    ],
    imageGallery: [
        {
            id: 'imageGallery',
            widgetId: MixerWidgets.ImageGallery,
            position: { y: 1, x: 7 },
            dimension: { y: 48, x: window.innerWidth > 1700 ? 88 : 120 },
            isTransparent: false,
            allowOverflow: false,
        },
    ],
    preview_static: [
        {
            id: 'preview',
            widgetId: MixerWidgets.Preview,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
            allowOverflow: false,
            isFullPage: true,
        },
    ],
};
