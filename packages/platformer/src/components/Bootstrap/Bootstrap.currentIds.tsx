import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMount } from 'react-use';

export const CurrentIdsHoc =
    (actionCreator: (change: Json) => Action) => (element: JSX.Element) => {
        const dispatch = useDispatch();
        const params: Json = useParams();

        useMount(() => {
            delete params['*'];
            if (Object.keys(params).length > 0) {
                dispatch(actionCreator(params));
            }
        });

        return element;
    };
