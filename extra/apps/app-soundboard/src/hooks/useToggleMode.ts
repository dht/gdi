import { useKey } from 'react-use';

export function useToggleMode(key: string) {
    useKey(
        key,
        () => {
            // const nextMode =
            //     appState.mode === IMode.byQuarters
            //         ? IMode.byWeeks
            //         : IMode.byQuarters;
            // dispatch(actions.appState.patch({ mode: nextMode }));
        },
        {},
        []
        // [appState.mode]
    );
}
