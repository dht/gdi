import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { UnderConstruction } from './UnderConstruction';

export type UnderConstructionContainerProps = {};

export function UnderConstructionContainer(_props: UnderConstructionContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <UnderConstruction />;
}

export default UnderConstructionContainer;
