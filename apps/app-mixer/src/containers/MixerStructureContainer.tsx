import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import MixerStructure, {
    ActionType,
} from '../components/MixerStructure/MixerStructure';

export const MixerStructureContainer = () => {
    const dispatch = useDispatch();
    const pageStructure = useSelector(selectors.base.$instancesForCurrentPage);
    const currentInstanceId = useSelector(selectors.raw.$rawCurrentIds).selectedInstanceId; // prettier-ignore
    const selectedToolId = useSelector(selectors.raw.$rawMixerState).selectedToolId; // prettier-ignore

    const callbacks = useMemo(
        () => ({
            onSelectItem: (instanceId: string) => {
                dispatch(
                    actions.currentIds.patch({
                        selectedInstanceId: instanceId,
                    })
                );
            },
            onMoveItem: (instanceId: string, newOrderValue: number) => {
                dispatch(
                    actions.instances.patch(instanceId, {
                        order: newOrderValue,
                    })
                );
            },
            onAction: async (action: ActionType, id: string) => {
                switch (action) {
                    case 'new':
                        dispatch({ type: 'ELEMENT_ADD' });
                        break;
                    case 'delete':
                        dispatch({ type: 'ELEMENT_DELETE', id });
                        break;
                    case 'drillDown':
                        dispatch({ type: 'ELEMENT_CONTENT', id });
                        break;
                }
            },
        }),
        [selectedToolId]
    );

    return (
        <MixerStructure
            currentInstanceId={currentInstanceId}
            pageStructure={pageStructure}
            callbacks={callbacks}
        />
    );
};
