export type TimelinePointRaw = {
    id: number;
    x: number;
    y: number;
    title?: string;
};

export type TimelinePoint = TimelinePointRaw & {
    sx: number;
    sy: number;
};

export const points: TimelinePointRaw[] = [
    {
        id: 0,
        x: 10,
        y: 20,
        title: '10,000$',
    },
    {
        id: 1,
        x: 20,
        y: 50,
        title: '20,000$',
    },
    {
        id: 2,
        x: 30,
        y: 40,
        title: '30,000$',
    },
    {
        id: 3,
        x: 50,
        y: -20,
        title: '40,000$',
    },
];

export const pointsWithSource: TimelinePoint[] = points.map((point, index) => {
    const source = points[index - 1];

    return {
        ...point,
        sx: source ? source.x : 0,
        sy: source ? source.y : 0,
    };
});
