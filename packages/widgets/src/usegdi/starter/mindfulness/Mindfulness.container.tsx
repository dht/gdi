import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Mindfulness } from './Mindfulness';

export type MindfulnessContainerProps = {};

export function MindfulnessContainer(_props: MindfulnessContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <Mindfulness />;
}

export default MindfulnessContainer;
