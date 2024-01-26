import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { GuidanceEditor } from './GuidanceEditor';

export type GuidanceEditorContainerProps = {};

export function GuidanceEditorContainer(_props: GuidanceEditorContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <GuidanceEditor />;
}

export default GuidanceEditorContainer;
