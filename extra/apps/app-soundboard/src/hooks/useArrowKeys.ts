import { useParams } from 'react-router-dom';
// import { actions } from '../redux/store';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useKey } from 'react-use';

export function useArrowKeys(fieldName: string, min: number, max: number) {
    // const history = useHistory();
    const dispatch = useDispatch();
    // const appState = useSelector($rawAppState);
    const params = useParams<any>();

    const a = {} as any; //...appState
    const value = a[fieldName];

    const nudgeFieldValue = useCallback(
        (amount: number) => {
            const newValue = Math.max(Math.min(value + amount, max), min);
            const change = {
                [fieldName]: newValue,
            };

            a[fieldName] = newValue;

            const urlParts = ['/quarters', a.quarterId];

            if (params.weekId) {
                urlParts.push('weeks', a.weekId);
            }

            if (params.dayId) {
                urlParts.push('days', a.dayId);
            }

            urlParts.push('domains', a.selectedDomainId);

            // history.push(urlParts.join('/'));

            // dispatch(actions.appState.patch(change));
        },
        [value]
    );

    useKey(
        'ArrowLeft',
        () => {
            nudgeFieldValue(-1);
        },
        {},
        [nudgeFieldValue]
    );

    useKey(
        'ArrowRight',
        () => {
            nudgeFieldValue(+1);
        },
        {},
        [nudgeFieldValue]
    );
}
