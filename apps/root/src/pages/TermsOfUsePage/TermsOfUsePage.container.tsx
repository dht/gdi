import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { TermsOfUsePage } from './TermsOfUsePage';

export type TermsOfUsePageContainerProps = {};

export function TermsOfUsePageContainer(_props: TermsOfUsePageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <TermsOfUsePage />;
}

export default TermsOfUsePageContainer;
