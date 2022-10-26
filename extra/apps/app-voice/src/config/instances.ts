import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { VoiceWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    voice: [
        {
            id: '10',
            widgetId: VoiceWidgets.Speaker,
            position: { y: 6, x: 3 },
            dimension: { y: 19, x: 58 },
        },
        {
            id: '11',
            widgetId: VoiceWidgets.Voice,
            position: { y: 2, x: 3 },
            dimension: { y: 46, x: 128 },
            isTransparent: true,
        },
        {
            id: '13',
            widgetId: VoiceWidgets.VoiceTop,
            position: {
                y: 3,
                x: 4,
            },
            dimension: {
                y: 3,
                x: 14,
            },
            isTransparent: true,
        },
        {
            id: 'Transcript',
            widgetId: VoiceWidgets.Transcript,
            position: { y: 26, x: 3 },
            dimension: { y: 20, x: 58 },
        },
    ],
};
