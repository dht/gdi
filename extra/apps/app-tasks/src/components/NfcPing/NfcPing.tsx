import React, { useMemo } from 'react';
import { Wrapper } from './NfcPing.style';
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
        <Wrapper
            className='NfcPing-wrapper'
            data-testid='NfcPing-wrapper'
            title={lastNfcDate}
        >
            {lastNfcValue}
        </Wrapper>
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
