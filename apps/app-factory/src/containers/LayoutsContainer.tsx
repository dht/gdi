import React, { useMemo } from 'react';
import Layouts from '../components/Layouts/Layouts';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { definitions } from '../components/Layouts/definitions/main';
import { guid4 } from 'shared-base';
import { useNavigate } from 'react-router-dom';
import { prompt } from '@gdi/web-ui';

export const LayoutsContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layouts = useSelector(selectors.tables.$layouts);
    const allOptions = useSelector(selectors.options.$allOptions);

    const data = layouts;

    const callbacks = useMemo(
        () => ({
            onAction: (actionId: string) => {},
            onDrillDown: (itemId: string) => {
                dispatch(
                    actions.currentIdsFactory.patch({
                        layoutId: itemId,
                    })
                );

                navigate(`${document.location.pathname}/${itemId}`);
            },
            onSave: (id: string, change: Json) => {
                return dispatch(actions.layouts.patch(id, change));
            },
            onNew: (data: Json) => {
                data.id = guid4();
                return dispatch(actions.layouts.add(data));
            },
            onDelete: async (id: string) => {
                const { didCancel } = await prompt.confirm({
                    title: 'Delete layout',
                    description: 'Are you sure you want to delete this layout?',
                    submitButtonText: "I'm sure",
                });

                if (didCancel) {
                    return;
                }

                dispatch(actions.layouts.delete(id));
            },
        }),
        []
    );

    return (
        <Layouts
            {...definitions}
            data={data}
            callbacks={callbacks}
            doubleClickActionId='drillDown'
            allOptions={allOptions}
        />
    );
};
