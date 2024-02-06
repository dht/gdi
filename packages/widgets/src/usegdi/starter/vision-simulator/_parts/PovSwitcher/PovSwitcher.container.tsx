import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { PovSwitcher } from './PovSwitcher';

export type PovSwitcherContainerProps = {};

export function PovSwitcherContainer(_props: PovSwitcherContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <PovSwitcher />;
}

export default PovSwitcherContainer;
