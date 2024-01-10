import { useEffect, useReducer } from 'react';
import { useSetState } from 'react-use';
import { IHudTimeline, IVisibilityState, Json, Visibility } from '../Hud.types';

export function useTimeline(timeline: IHudTimeline = []) {
    const [timers, patchTimers] = useSetState<Record<string, any>>({});
    const [visible, dispatch] = useReducer(allVisibility, {});

    useEffect(() => {
        timeline.forEach((frame) => {
            const { id, itemId, millis, visibility } = frame;

            const timer = setTimeout(() => {
                dispatch({
                    id: itemId,
                    type: visibility,
                });
            }, millis);

            patchTimers({ [id]: timer });
        });

        return () => {
            Object.values(timers).forEach((timer: any) => {
                clearTimeout(timer);
            });
        };
    }, []);

    return visible as Record<string, IVisibilityState>;
}

export function itemVisibility(state: IVisibilityState, action: Json) {
    switch (action.type) {
        case 'APPEAR':
            return {
                ...state,
                isVisible: true,
            };
        case 'DISAPPEAR':
            return {
                ...state,
                isFadingOut: true,
            };
        default:
            return state;
    }
}

export function allVisibility(
    state: Record<string, IVisibilityState> = {},
    action: Json
) {
    const { id } = action;

    switch (action.type) {
        case 'APPEAR':
        case 'DISAPPEAR':
            return {
                ...state,
                [id]: itemVisibility(state[id], action),
            };
        default:
            return state;
    }
}
