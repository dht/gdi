import { useCallback } from 'react';
import { useArrows } from './useArrows';

type Coords = {
    rowIndex: number;
    columnIndex: number;
};

export function useNudge(
    coord: Coords | null,
    lastCoords: Coords | null,
    callback: (newCoord: Coords, force?: boolean) => void,
    depArray: any[] = []
) {
    const onDirection = useCallback(
        (direction: string, force?: boolean) => {
            let newCoords;

            switch (direction) {
                case 'ArrowUp':
                    newCoords = nudgeCoords(coord, [-1, 0], lastCoords);
                    callback(newCoords, force);
                    break;
                case 'ArrowRight':
                    newCoords = nudgeCoords(coord, [0, 1], lastCoords);
                    callback(newCoords, force);
                    break;
                case 'ArrowDown':
                    newCoords = nudgeCoords(coord, [1, 0], lastCoords);
                    callback(newCoords, force);
                    break;
                case 'ArrowLeft':
                    newCoords = nudgeCoords(coord, [0, -1], lastCoords);
                    callback(newCoords, force);
                    break;
            }
        },
        [depArray]
    );

    useArrows((shortKey: IShortKey) => {
        onDirection(shortKey.key);
    }, depArray);

    return onDirection;
}

const nudgeCoords = (
    coords: Coords | null,
    by: number[],
    lastCoords: Coords | null
) => {
    let { rowIndex = 0, columnIndex = 0 } = coords ?? {};

    return {
        rowIndex: limitRange(rowIndex + by[0], 0, lastCoords!.rowIndex),
        columnIndex: limitRange(
            columnIndex + by[1],
            0,
            lastCoords!.columnIndex
        ),
    };
};

const limitRange = (value: number, min: number, max: number) => {
    return Math.min(Math.max(min, value), max);
};
