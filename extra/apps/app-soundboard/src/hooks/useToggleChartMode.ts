// import { actions } from '../redux/store';
import { useKey } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';

export function useToggleChartMode(key: string) {
    useKey(
        key,
        () => {
            // const nextMode =
            //     appState.chartMode === IChartMode.all
            //         ? IChartMode.single
            //         : IChartMode.all;
            // dispatch(actions.appState.patch({ chartMode: nextMode }));
        },
        {}
        // [appState.chartMode]
    );
}
