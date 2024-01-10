import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MobileModal } from './MobileModal';

export type MobileModalContainerProps = {};

export function MobileModalContainer(_props: MobileModalContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MobileModal />;
}

export default MobileModalContainer;
