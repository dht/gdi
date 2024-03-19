import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ContactFocus } from './ContactFocus';

export type ContactFocusContainerProps = {};

export function ContactFocusContainer(_props: ContactFocusContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <ContactFocus />;
}

export default ContactFocusContainer;
