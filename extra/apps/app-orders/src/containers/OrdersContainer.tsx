import React, { useMemo } from 'react';
import Orders from '../components/Orders/Orders';
import { selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';

export const OrdersContainer = () => {
    const dispatch = useDispatch();
    const orders = useSelector(selectors.tables.$orders);
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Orders
            data={orders}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default OrdersContainer;
