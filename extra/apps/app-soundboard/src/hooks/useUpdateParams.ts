// import { actions } from '../redux/store';
import { useMount } from 'react-use';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

type IParams = {
    quarterId: string;
    weekId: string;
    dayId: string;
};

export function useUpdateParams() {
    const dispatch = useDispatch();
    const params = useParams<IParams>();

    useMount(() => {
        // dispatch(
        //     actions.appState.patch({
        //         quarterId: parseInt(params.quarterId, 10),
        //         weekId: parseInt(params.weekId, 10),
        //         dayId: parseInt(params.dayId, 10),
        //     })
        // );
    });
}
