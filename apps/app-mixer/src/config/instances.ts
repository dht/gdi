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
            id: 'MixerTree',
            widgetId: MixerWidgets.MixerTree,
            position: { y: 28, x: 90 },
            dimension: { y: 1, x: 1 },
            allowOverflow: true,
            isTransparent: true,
        },
        {
            id: 'ImageUpload',
            widgetId: MixerWidgets.ImageUpload,
            position: { y: 1, x: 1 },
            dimension: { y: 1, x: 1 },
            isTransparent: true,
            allowOverflow: true,
        },
        {
            id: 'PlayMode',
            widgetId: MixerWidgets.PlayMode,
            position: { y: 1, x: 50 },
            dimension: { y: 1, x: 1 },
            isTransparent: true,
            allowOverflow: true,
        },
    ],
    pages: [
        {
            id: 'pages',
            widgetId: MixerWidgets.Pages,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
            allowOverflow: false,
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
        {
            id: 'ImageUpload',
            widgetId: MixerWidgets.ImageUpload,
            position: { y: 1, x: 1 },
            dimension: { y: 1, x: 1 },
            isTransparent: true,
            allowOverflow: true,
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
