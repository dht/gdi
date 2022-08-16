import React, { useMemo } from 'react';
import DesignerTree from '../../components/DesignerTree/DesignerTree';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';

export const DesignerTreeContainer = () => {
    const dispatch = useDispatch();
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const layout = useSelector(selectors.base.$layout);
    const resolutions = useSelector(selectors.base.$resolutions);

    const callbacks = useMemo(
        () => ({
            selectEntity: (flexEntityId: string) => {
                dispatch(
                    actions.currentIdsFactory.patch({
                        flexEntityId,
                    })
                );
            },
            onResolutionChange: (resolutionId: string) => {
                dispatch(
                    actions.currentIdsFactory.patch({
                        resolutionId,
                    })
                );
            },
            onSeed: (withId: string) => {
                dispatch({
                    type: 'FLEX_SEED',
                    withId,
                });
            },
            onAction: (actionId: string) => {
                switch (actionId) {
                    case 'rename':
                        dispatch({ type: 'FLEX_RENAME' });
                        break;
                }
            },
        }),
        []
    );

    return (
        <DesignerTree
            layout={layout}
            flexEntityId={currentIds.flexEntityId}
            resolutionId={currentIds.resolutionId}
            resolutions={resolutions}
            callbacks={callbacks}
        />
    );
};
