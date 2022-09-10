import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import Factory from '../components/Factory/Factory';

export const FactoryContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawFactoryState);
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const customBlock = useSelector(selectors.base.$customBlock);

    const callbacks = useMemo(
        () => ({
            selectEntity: (id: string) => {
                dispatch(
                    actions.currentIdsFactory.patch({
                        flexEntityId: id,
                    })
                );
            },
            onAction: async (action: ActionType) => {
                switch (action) {
                    case 'splitHorizontally':
                        dispatch({ type: 'SPLIT_FLEX', isHorizontally: true });
                        break;
                    case 'splitVertically':
                        dispatch({ type: 'SPLIT_FLEX', isHorizontally: false });
                        break;
                    case 'delete':
                        dispatch({ type: 'DELETE_FLEX' });
                        break;
                }
            },
        }),
        []
    );

    return (
        <Factory
            items={customBlock?.layout?.items}
            selectedItemId={currentIds.flexEntityId}
            callbacks={callbacks}
        />
    );
};
