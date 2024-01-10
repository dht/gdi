import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { PrivacyPolicyPage } from './PrivacyPolicyPage';

export type PrivacyPolicyPageContainerProps = {};

export function PrivacyPolicyPageContainer(_props: PrivacyPolicyPageContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <PrivacyPolicyPage />;
}

export default PrivacyPolicyPageContainer;
