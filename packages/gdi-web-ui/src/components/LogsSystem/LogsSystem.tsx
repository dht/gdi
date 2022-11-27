import React, { useMemo, useRef } from 'react';
import Draggable from 'react-draggable';
import Logs from '../Logs/Logs';
import { Container, Header } from './LogsSystem.style';
import { sortBy } from 'shared-base';
import { useSystemEvents } from './useSystemEvents';

export type LogsSystemProps = {};

export function LogsSystem(_props: LogsSystemProps) {
    const events = useSystemEvents();
    const ref = useRef<HTMLDivElement>(null);

    const eventsSorted = useMemo(() => {
        return events.sort(sortBy('id'));
    }, [events.length]);

    const Cmp: any = Draggable;

    return (
        <Cmp>
            <Container
                className='LogsSystem-container'
                data-testid='LogsSystem-container'
                nodeRef={ref}
            >
                <Header>System Logs</Header>
                <Logs items={eventsSorted} showData={true} />
            </Container>
        </Cmp>
    );
}

export default LogsSystem;
