import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import LayoutVisual from '../components/LayoutVisual/LayoutVisual';
import { useAuthMount } from '@gdi/hooks';
import { useNavigate } from 'react-router-dom';
import { useMount } from 'react-use';

export const LayoutVisualContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const appState = useSelector(selectors.raw.$rawFactoryState);
    const layout = useSelector(selectors.base.$layout);
    const flex = useSelector(selectors.base.$flexEntityFlex);

    const { isLoadingLayoutItems } = appState;

    useAuthMount(async () => {
        dispatch(actions.appStateFactory.patch({ isLoadingLayoutItems: true }));
        await dispatch(actions.layouts.getItems(layout.id, {}));
        dispatch(actions.appStateFactory.patch({ isLoadingLayoutItems: false })); // prettier-ignore
    }, layout);

    const callbacks = useMemo(
        () => ({
            selectEntity: (id: string) => {
                dispatch(
                    actions.currentIdsFactory.patch({
                        flexEntityId: id,
                    })
                );
            },
            onAction: (actionId: string) => {
                switch (actionId) {
                    case 'splitHorizontally':
                        dispatch({ type: 'FLEX_SPLIT', isHorizontally: true });
                        break;
                    case 'splitVertically':
                        dispatch({ type: 'FLEX_SPLIT', isHorizontally: false });
                        break;
                    case 'delete':
                        dispatch({ type: 'FLEX_DELETE' });
                        break;
                    case 'rename':
                        dispatch({ type: 'FLEX_RENAME' });
                        break;
                    case 'edit':
                        dispatch({ type: 'FLEX_EDIT' });
                        break;
                    case 'back':
                        dispatch(
                            actions.currentIdsFactory.patch({
                                layoutId: '',
                            })
                        );
                        const path = document.location.pathname.split('/');
                        path.pop();
                        navigate(path.join('/'));
                        break;
                    case 'mode':
                        dispatch(
                            actions.appStateFactory.patch({
                                showItemsInTable: true,
                            })
                        );
                        break;
                }
            },
            onArrow: (shortKey: IShortKey) => {
                dispatch({
                    type: 'FLEX_DESIGNER_ARROW',
                    shortKey,
                });
            },
            onSeed: (withId: string) => {
                dispatch({
                    type: 'FLEX_SEED',
                    withId,
                });
            },
            onFlexChange: (flex: number) => {
                dispatch({
                    type: 'FLEX_PROPS_FLEX',
                    flex,
                });
            },
            onResolutionChange: (resolutionIndex: number) => {
                dispatch({
                    type: 'FLEX_RESOLUTION',
                    resolutionIndex,
                });
            },
        }),

        []
    );

    if (!layout) {
        return null;
    }

    return (
        <LayoutVisual
            layout={layout}
            items={layout.items}
            selectedItemId={currentIds.flexEntityId}
            callbacks={callbacks}
            isLoading={isLoadingLayoutItems}
            flex={flex}
        />
    );
};
