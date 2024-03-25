import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Subtitles } from './Subtitles';

export type SubtitlesContainerProps = {};

export function SubtitlesContainer(_props: SubtitlesContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <Subtitles />;
}

export default SubtitlesContainer;
