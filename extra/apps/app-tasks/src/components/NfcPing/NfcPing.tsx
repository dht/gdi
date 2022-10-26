import React, { useMemo } from 'react';
import { Container } from './NfcPing.style';
import { useSelector } from 'react-redux';
import { selectors } from '../../store';

export type NfcPingProps = {
    lastNfcValue: string;
    lastNfcTimestamp: number;
};

export function NfcPing(props: NfcPingProps) {
    const { lastNfcValue, lastNfcTimestamp } = props;

    const lastNfcDate = useMemo(() => {
        return new Date(lastNfcTimestamp).toString();
    }, [lastNfcTimestamp]);

    return (
        <Container
            className='NfcPing-container'
            data-testid='NfcPing-container'
            title={lastNfcDate}
        >
            {lastNfcValue}
        </Container>
    );
}

export type NfcPingContainerProps = {};

export function NfcPingContainer(_props: NfcPingContainerProps) {
    const tasksState = useSelector(selectors.raw.$rawTasksState);

    return (
        <NfcPing
            lastNfcValue={tasksState.lastNfcValue}
            lastNfcTimestamp={tasksState.lastNfcTimestamp}
        />
    );
}

export default NfcPing;
