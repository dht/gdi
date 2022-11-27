import React, { useMemo } from 'react';
import LayoutItems from '../components/Layouts/LayoutItems';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { definitions } from '../components/Layouts/definitions/sub';
import { useMount } from 'react-use';
import { guid4 } from 'shared-base';
import { useNavigate } from 'react-router-dom';
import { prompt } from '@gdi/web-ui';

export const LayoutTableContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const layout = useSelector(selectors.base.$layout);
    const layoutItems = useSelector(selectors.tables.$layoutItems);
    const allOptions = useSelector(selectors.options.$allOptions);

    const { layoutId } = currentIds;

    useMount(() => {
        if (!currentIds.layoutId) {
            return;
        }

        dispatch(actions.layouts.getItems(layoutId, {}));
    });

    const data = layoutItems;

    const callbacks = useMemo(
        () => ({
            onAction: (actionId: string) => {
                switch (actionId) {
                    case 'back':
                        dispatch(
                            actions.currentIdsFactory.patch({
                                layoutId: '',
                            })
                        );
                        navigate(-1);
                        break;
                    case 'mode':
                        dispatch(
                            actions.appStateFactory.patch({
                                showItemsInTable: false,
                            })
                        );
                        break;
                }
            },
            onSave: (id: string, change: Json) => {
                return dispatch(
                    actions.layouts.patchItem(layoutId, id, change)
                );
            },
            onNew: (data: Json) => {
                data.itemId = guid4();
                return dispatch(actions.layouts.pushItem(layoutId, data));
            },
            onDelete: async (id: string) => {
                const { didCancel } = await prompt.confirm({
                    title: 'Delete item',
                    description: 'Are you sure you want to delete this item?',
                    submitButtonText: "I'm sure",
                });

                if (didCancel) {
                    return;
                }

                dispatch(actions.layouts.deleteItem(layoutId, id));
            },
        }),
        []
    );

    return (
        <LayoutItems
            {...definitions}
            layout={layout}
            data={data}
            callbacks={callbacks}
            allOptions={allOptions}
        />
    );
};

export default LayoutTableContainer;
