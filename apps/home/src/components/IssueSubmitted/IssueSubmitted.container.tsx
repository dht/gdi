import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { IssueSubmitted } from './IssueSubmitted';

export type IssueSubmittedContainerProps = {};

export function IssueSubmittedContainer(_props: IssueSubmittedContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <IssueSubmitted />;
}

export default IssueSubmittedContainer;
