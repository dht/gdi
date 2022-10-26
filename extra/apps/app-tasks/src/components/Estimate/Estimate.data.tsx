export type Estimation = {
    id: string;
    value: number;
};

export const estimations: Estimation[] = [
    { id: '5m', value: 5 * 60 },
    { id: '10m', value: 10 * 60 },
    { id: '15m', value: 15 * 60 },
    { id: '20m', value: 20 * 60 },
    { id: '30m', value: 30 * 60 },
    { id: '40m', value: 40 * 60 },
    { id: '45m', value: 45 * 60 },
    { id: '1hr', value: 60 * 60 },
    { id: '1.5hr', value: 1.5 * 60 * 60 },
    { id: '2hr', value: 2 * 60 * 60 },
    { id: '2.5hr', value: 2.5 * 60 * 60 },
    { id: '3hr', value: 3 * 60 * 60 },
    { id: '4hr', value: 4 * 60 * 60 },
    { id: '5hr', value: 5 * 60 * 60 },
    { id: '6hr', value: 6 * 60 * 60 },
    { id: '1d', value: 8 * 60 * 60 },
    { id: '2d', value: 2 * 8 * 60 * 60 },
    { id: '3d', value: 3 * 8 * 60 * 60 },
    { id: '4d', value: 4 * 8 * 60 * 60 },
    { id: '1w', value: 5 * 8 * 60 * 60 },
    { id: '1.5w', value: 1.5 * 5 * 8 * 60 * 60 },
    { id: '2w', value: 2 * 5 * 8 * 60 * 60 },
    { id: '1M', value: 4.5 * 5 * 8 * 60 * 60 },
    { id: 'none', value: 0 },
].reverse();
