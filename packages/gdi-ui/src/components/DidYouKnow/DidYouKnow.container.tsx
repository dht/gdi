import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { DidYouKnow } from './DidYouKnow';

export type DidYouKnowContainerProps = {};

export function DidYouKnowContainer(_props: DidYouKnowContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <DidYouKnow />;
}

export default DidYouKnowContainer;
