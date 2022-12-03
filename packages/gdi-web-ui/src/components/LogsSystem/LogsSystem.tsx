import React, { useMemo } from 'react';
import Draggable from 'react-draggable';
import Logs from '../Logs/Logs';
import { Wrapper, Header } from './LogsSystem.style';
import { sortBy } from 'shared-base';
import { useSystemEvents } from './useSystemEvents';

export type LogsSystemProps = {};

export function LogsSystem(_props: LogsSystemProps) {
    const events = useSystemEvents();

    const eventsSorted = useMemo(() => {
        return events.sort(sortBy('id'));
    }, [events.length]);

    const Cmp: any = Draggable;

    return (
        <Cmp>
            <Wrapper
                className='LogsSystem-wrapper'
                data-testid='LogsSystem-wrapper'
            >
                <Header>System Logs</Header>
                <Logs items={eventsSorted} showData={true} />
            </Wrapper>
        </Cmp>
    );
}

export default LogsSystem;
