import React, { useMemo } from 'react';
import Money from '../components/Money/Money';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { invokeEvent } from 'shared-base';
import { OnionContainer } from './OnionContainer';

export const MoneyContainer = () => {
    const dispatch = useDispatch();
    const moneyLines = useSelector(selectors.tables.$moneyLines);
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
        <Money
            data={moneyLines}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
            customView={OnionContainer}
        />
    );
};

export default MoneyContainer;
