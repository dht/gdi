import React, { useMemo } from 'react';
import Carts from '../components/Carts/Carts';
import { selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';

export const CartsContainer = () => {
    const dispatch = useDispatch();
    const carts = useSelector(selectors.tables.$carts);
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                console.log('ids ->', ids);
            },
        }),
        []
    );

    return (
        <Carts
            data={carts}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default CartsContainer;
