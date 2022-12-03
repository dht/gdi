import React, { useMemo } from 'react';
import Products from '../components/Products/Products';
import { selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';

export const ProductsContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectors.tables.$products);
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Products
            data={products}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default ProductsContainer;
