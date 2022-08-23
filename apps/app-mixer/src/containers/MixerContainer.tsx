import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import MixerStructure, {
    ActionType,
} from '../components/MixerStructure/MixerStructure';
import MixerVisual from '../components/MixerVisual/MixerVisual';
import { ModalContentContainer } from './ModalContentContainer';

export const MixerContainer = () => {
    const dispatch = useDispatch();
    const pageStructure = useSelector(selectors.base.$elementsForCurrentPage);
    const currentInstanceId = useSelector(selectors.raw.$rawCurrentIds).selectedInstanceId; // prettier-ignore
    const selectedToolId = useSelector(selectors.raw.$rawMixerState).selectedToolId; // prettier-ignore
    const mode = useSelector(selectors.raw.$rawMixerState).mode;

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
                        const fieldName =
                            selectedToolId === 'browse'
                                ? 'libraryInstanceId'
                                : 'contentInstanceId';

                        dispatch(actions.currentIds.patch({ [fieldName]: id }));
                        break;
                }
            },
        }),
        [selectedToolId]
    );

    function renderMixer() {
        switch (mode) {
            case 'structure':
                return (
                    <MixerStructure
                        currentInstanceId={currentInstanceId}
                        pageStructure={pageStructure}
                        callbacks={callbacks}
                    />
                );
            case 'visual':
                return (
                    <MixerVisual
                        currentInstanceId={currentInstanceId}
                        pageStructure={pageStructure}
                        callbacks={callbacks}
                    />
                );
        }
        return null;
    }

    return (
        <>
            {renderMixer()}
            <ModalContentContainer />
        </>
    );
};
