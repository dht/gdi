import { IGraphData, IGraphPart } from '../types';

export const graphData1: IGraphData = {
    id: 'g1',
    points: [
        { x: 0, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 10 },
        { x: 10, y: 0 },
    ],
    params: {
        zIndex: 0.5,
        alpha: 0.5,
        color: [1, 0.5, 0.5],
    },
};

export const graphData2: IGraphData = {
    id: 'g1',
    points: [
        { x: 0, y: 5 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 0 },
        { x: 10, y: 3 },
    ],
    params: {
        zIndex: 1,
        alpha: 0.5,
        color: [0.5, 1, 0.5],
    },
};
