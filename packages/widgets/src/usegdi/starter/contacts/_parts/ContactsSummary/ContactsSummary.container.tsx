import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ContactsSummary } from './ContactsSummary';

export type ContactsSummaryContainerProps = {};

export function ContactsSummaryContainer(_props: ContactsSummaryContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <ContactsSummary />;
}

export default ContactsSummaryContainer;
