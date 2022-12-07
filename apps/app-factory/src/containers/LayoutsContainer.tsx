import React, { useMemo } from 'react';
import Layouts from '../components/Layouts/Layouts';
import { definitions } from '../components/Layouts/definitions/main';
import { selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export const LayoutsContainer = () => {
    const dispatch = useDispatch();
    const layouts = useSelector(selectors.tables.$layouts);
    const allOptions = useSelector(selectors.options.$allOptions);

    const data = layouts;

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string, point?: Json) => {},
            onSelectionChange: (ids: string[]) => {},
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Layouts
            nodeName='Layouts'
            data={data}
            callbacks={callbacks}
            allOptions={allOptions}
            {...(definitions as any)}
        />
    );
};

export default LayoutsContainer;
