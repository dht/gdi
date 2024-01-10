import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MobileArrows } from './MobileArrows';

export type MobileArrowsContainerProps = {};

export function MobileArrowsContainer(_props: MobileArrowsContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MobileArrows />;
}

export default MobileArrowsContainer;
