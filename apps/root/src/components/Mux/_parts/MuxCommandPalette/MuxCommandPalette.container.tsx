import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxCommandPalette } from './MuxCommandPalette';

export type MuxCommandPaletteContainerProps = {};

export function MuxCommandPaletteContainer(_props: MuxCommandPaletteContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <MuxCommandPalette />;
}

export default MuxCommandPaletteContainer;
