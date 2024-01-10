import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { DocsMenuMobile } from './DocsMenuMobile';

export type DocsMenuMobileContainerProps = {};

export function DocsMenuMobileContainer(_props: DocsMenuMobileContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <DocsMenuMobile />;
}

export default DocsMenuMobileContainer;
