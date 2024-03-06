import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { OneBoardPage } from './OneBoardPage';

export type OneBoardPageContainerProps = {};

export function OneBoardPageContainer(_props: OneBoardPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <OneBoardPage />;
}

export default OneBoardPageContainer;
