import {
    ClockAngle,
    IHudItem,
    IHudItemWithPoints,
    IHudPoints,
    IVisibilityState,
    Visibility,
} from './Hud.types';

type IParentInfo = {
    mx: number;
    my: number;
    width: number;
    height: number;
};

export const parseItems = (
    items: IHudItem[],
    visibility: Record<string, IVisibilityState>,
    info: IParentInfo
): IHudItemWithPoints[] => {
    const { mx, my, width } = info;

    return items.map((item: IHudItem) => {
        const { origin, isLeft, textTop } = item;

        const [ox, oy] = origin;

        const x1 = mx + ox;
        const y1 = my + oy;
        const x2 = isLeft ? 220 : width - 220;
        const y2 = textTop;

        let clockAngle: ClockAngle = '2';

        if (x1 < x2) {
            clockAngle = y1 < y2 ? '4' : '2';
        } else {
            clockAngle = y1 < y2 ? '8' : '10';
        }

        const points: IHudPoints = {
            x1,
            y1,
            x2,
            y2,
            top: Math.min(y1, y2),
            left: Math.min(x1, x2),
            width: Math.abs(x2 - x1),
            height: Math.abs(y2 - y1),
            clockAngle,
            isTextOnBottom: clockAngle === '4' || clockAngle === '8',
        };

        return {
            ...item,
            points,
            ...visibility[item.id],
        };
    });
};
