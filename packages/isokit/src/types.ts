export type IGraphPart = {
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color: IColor;
    alpha: number;
    zIndex: number;
};

export type IGraphPoint = {
    x: number;
    y: number;
};

export type IGraphPoints = IGraphPoint[];

export type IGraphParams = {
    zIndex: number;
    alpha: number;
    color: IColor;
};

export type IGraphData = {
    id: string;
    points: IGraphPoints;
    params: IGraphParams;
};
