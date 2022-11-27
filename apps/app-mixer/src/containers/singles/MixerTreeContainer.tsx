import React, { useMemo } from 'react';
import { MixerTree } from '../../components/MixerTree/MixerTree';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';

export const MixerTreeContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawMixerState);
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const pageInstanceId = useSelector(selectors.base.$pageInstanceId);
    const pageInstances = useSelector(selectors.base.$pageInstances);

    const instancesForCurrentPage = useSelector(
        selectors.base.$instancesForCurrentPage
    );

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                dispatch(
                    actions.appStateMixer.patch({
                        showMixerTree: false,
                    })
                );
            },
            onPageInstanceSelect: (id: string) => {
                dispatch(
                    actions.currentIds.patch({
                        pageInstanceId: id,
                    })
                );
            },
            onPageInstanceChange: (
                pageInstanceId: string,
                change: Partial<IPageInstance>
            ) => {
                dispatch(
                    actions.libraryPageInstances.patch(pageInstanceId, change)
                );
            },

            onCustomAction: (actionId: string, _data?: Json) => {
                console.log('actionId ->', actionId);

                switch (actionId) {
                    case 'duplicateVersion':
                        dispatch({ type: 'DUPLICATE_PAGE_INSTANCE' });
                        break;
                    case 'promoteVersion':
                        dispatch({ type: 'PROMOTE_PAGE_INSTANCE' });
                        break;
                    case 'resetVersion':
                        dispatch({ type: 'RESET_PAGE_INSTANCE' });
                        break;
                    case 'deleteVersion':
                        dispatch({ type: 'DELETE_PAGE_INSTANCE' });
                        break;
                }
            },
        }),
        []
    );

    if (!appState.showMixerTree) {
        return null;
    }

    return (
        <MixerTree
            pageInstances={pageInstances}
            pageInstanceId={pageInstanceId}
            selectedInstanceId={currentIds.selectedInstanceId}
            instances={instancesForCurrentPage}
            callbacks={callbacks}
        />
    );
};

export default MixerTreeContainer;
