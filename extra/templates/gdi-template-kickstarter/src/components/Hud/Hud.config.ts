import { IHudConfig, IHudItem, ITimeline, ITimelineFrame } from './Hud.types';

export const config: IHudConfig = {
    color: '#00ff15',
    height: 700,
    width: 1000,
};

export const items: IHudItem[] = [
    {
        id: '1',
        text: 'Argonomic back system',
        origin: [0, -250],
        textTop: 60,
        isLeft: true,
    },
    {
        id: '2',
        text: '20L capacity (+13" laptop)',
        origin: [100, -100],
        textTop: 200,
        isLeft: false,
    },
    {
        id: '3',
        text: 'Rain & dust protection',
        origin: [80, -60],
        textTop: 450,
        isLeft: false,
    },
    {
        id: '4',
        text: 'Durable materials',
        origin: [0, 80],
        textTop: 550,
        isLeft: true,
    },
];

export const timeline: ITimeline = [
    {
        id: '1',
        itemId: '1',
        millis: 100,
        visibility: 'APPEAR',
    },
    {
        id: '2',
        itemId: '1',
        millis: 3100,
        visibility: 'DISAPPEAR',
        cameraPosition: {
            alpha: 1,
        },
    },
    {
        id: '3',
        itemId: '2',
        millis: 3600,
        visibility: 'APPEAR',
    },
    {
        id: '4',
        itemId: '2',
        millis: 6600,
        visibility: 'DISAPPEAR',
        cameraPosition: {
            alpha: 0,
            beta: 0.5,
        },
    },
    {
        id: '5',
        itemId: '3',
        millis: 7100,
        visibility: 'APPEAR',
    },
    {
        id: '6',
        itemId: '3',
        millis: 10100,
        visibility: 'DISAPPEAR',
        cameraPosition: {
            alpha: 0.5,
            beta: 1.5,
        },
    },
    {
        id: '7',
        itemId: '4',
        millis: 10600,
        visibility: 'APPEAR',
    },
    {
        id: '8',
        itemId: '4',
        millis: 13600,
        visibility: 'DISAPPEAR',
        cameraPosition: {
            alpha: 0,
            beta: 1.5,
        },
    },
];
