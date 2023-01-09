import { useMemo, useReducer } from 'react';
import { useArrows } from '@gdi/hooks';
import { ITile, ITiles, ITilesByPosition, TilePosition } from '../types';
import { useSetState } from 'react-use';

type Options = {
    withKeys?: boolean;
};

export function useBlkr(options: Options): Return {
    const { withKeys } = options;
    const [state, dispatch] = useReducer(tilesReducer, {
        top: '1',
        left: '2',
        center: '3',
        right: '4',
        bottom: '5',
        queue1: '6',
        queue2: '7',
    });

    const tiles = useMemo(() => {
        console.log('state ->', state);

        return items.map((item) => {
            const { id } = item;

            const position = Object.keys(state).find(
                (pos) => (state as any)[pos] === id
            ) as TilePosition;

            console.log('id, position ->', id, position);

            return {
                ...item,
                position,
            };
        });
    }, [state]);

    const callbacks = useMemo(
        () => ({
            next: () => {
                dispatch({ type: 'NEXT' });
            },
            previous: () => {
                dispatch({ type: 'PREVIOUS' });
            },
            top: () => {
                dispatch({ type: 'TOP' });
            },
            bottom: () => {
                dispatch({ type: 'BOTTOM' });
            },
        }),
        [state, dispatch]
    );

    useArrows(
        (shortKey) => {
            if (!withKeys) {
                return;
            }

            switch (shortKey.key) {
                case 'ArrowLeft':
                    callbacks.previous();
                    break;
                case 'ArrowRight':
                    callbacks.next();
                    break;
                case 'ArrowUp':
                    callbacks.top();
                    break;
                case 'ArrowDown':
                    callbacks.bottom();
                    break;
            }
        },
        [withKeys, callbacks]
    );

    return [tiles, callbacks];
}

type Return = [ITiles, Callbacks];

type Callbacks = {
    next: () => void;
    previous: () => void;
};

const items: ITiles = [
    {
        id: '1',
        color: 'green',
    },
    {
        id: '2',
        color: 'yellow',
    },
    {
        id: '3',
        color: 'brown',
    },
    {
        id: '4',
        color: 'gold',
    },
    {
        id: '5',
        color: 'cyan',
    },
    {
        id: '6',
        color: 'orange',
    },
];

export function tilesReducer(state: ITilesByPosition = {}, action: Json) {
    let tileId: string | undefined,
        nextState: ITilesByPosition = { ...state };

    const findQueue = (i: ITilesByPosition) => {
        const values = Object.values(i);
        const arr = [];

        for (let i = 1; i <= 6; i++) {
            if (!values.includes(i.toString())) {
                arr.push(i.toString());
            }
        }

        i.queue1 = arr[0];
        i.queue2 = arr[1];

        return i;
    };

    switch (action.type) {
        case 'NEXT':
            nextState.left = nextState.center;
            nextState.center = nextState.right;
            nextState.right = nextState.queue1;
            nextState = findQueue(nextState);
            return { ...nextState };
        case 'PREVIOUS':
            nextState.right = nextState.center;
            nextState.center = nextState.left;
            nextState.left = nextState.queue1;
            nextState = findQueue(nextState);
            return nextState;
        case 'TOP':
            nextState.top = nextState.center;
            nextState.center = nextState.bottom;
            nextState.bottom = nextState.queue1;
            nextState = findQueue(nextState);
            return nextState;
        case 'BOTTOM':
            nextState.bottom = nextState.center;
            nextState.center = nextState.top;
            nextState.top = nextState.queue1;
            nextState = findQueue(nextState);
            return nextState;
        default:
            return nextState;
    }
}
