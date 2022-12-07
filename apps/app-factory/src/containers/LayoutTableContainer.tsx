import React, { useMemo } from 'react';
import LayoutItems from '../components/Layouts/LayoutItems';
import { actions, selectors } from '../store';
import { definitions } from '../components/Layouts/definitions/sub';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';
import { useNavigate } from 'react-router-dom';

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
            onDrillDown: (itemId: string, point?: Json) => {},
            onSelectionChange: (ids: string[]) => {},
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <LayoutItems
            nodeName='LayoutItems'
            layout={layout}
            data={data}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
            {...(definitions as any)}
        />
    );
};

export default LayoutTableContainer;
