export type Json = Record<string, any>;

export type IHudConfig = {
    color: string;
    width: number;
    height: number;
    glbPath: string;
    radius?: number;
    alpha?: number;
    beta?: number;
};

export type IHudItem = {
    id: string;
    text: string;
    origin: number[];
    textTop: number;
    isLeft?: boolean;
};

export type IHudPairs = {};

export type IHudState = {
    color: string;
    width: number;
    height: number;
    mx: number;
    my: number;
};

export type IVisibilityState = {
    isVisible?: boolean;
    isFadingOut?: boolean;
};

export type IHudItemWithPoints = IHudItem & {
    points: IHudPoints;
} & IVisibilityState;

export type ClockAngle = '2' | '4' | '8' | '10';

export type IHudPoints = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    top: number;
    left: number;
    width: number;
    height: number;
    clockAngle: ClockAngle;
    isTextOnBottom: boolean;
};

export type Visibility = 'APPEAR' | 'DISAPPEAR';

export type IHudTimeline = IHudTimelineFrame[];

export type IHudTimelineFrame = {
    id: string;
    itemId: string;
    millis: number;
    visibility: Visibility;
    cameraPosition?: ICameraPosition;
};

export type ICameraPosition = {
    radius?: number;
    alpha?: number;
    beta?: number;
    target?: number[];
};
