import React, { useMemo, useRef } from 'react';
import { ISystemEvent } from '../../types';
import Logs from '../Logs/Logs';
import {
    Column,
    Container,
    Data,
    EventId,
    Item,
    Row,
    Sequence,
    Timestamp,
} from './SystemLogs.style';
import { useSystemEvents } from './useSystemEvents';
import Draggable from 'react-draggable';
import { sortBy } from 'shared-base';

export type SystemLogsProps = {};

export function SystemLogs(_props: SystemLogsProps) {
    const events = useSystemEvents();
    const ref = useRef<HTMLDivElement>(null);

    function renderEvent(event: Json) {
        const systemEvent = event as ISystemEvent;
        const { id, timestamp, timestampText, eventId } = systemEvent;

        const data: Json = { ...systemEvent };
        delete data['id'];
        delete data['timestamp'];
        delete data['timestampText'];
        delete data['eventId'];

        return (
            <Item key={systemEvent.id} className='event'>
                <Column width={60}>
                    <Sequence>{id}</Sequence>
                </Column>
                <Column>
                    <Row>
                        <EventId>{eventId}</EventId>
                        <Timestamp title={new Date(timestamp || 0).toString()}>
                            {timestampText}
                        </Timestamp>
                    </Row>
                    <Row>
                        <Data
                            onClick={() =>
                                console.log(JSON.stringify(data, null, 4))
                            }
                        >
                            {JSON.stringify(data)}
                        </Data>
                    </Row>
                </Column>
            </Item>
        );
    }

    const eventsSorted = useMemo(() => {
        return events.sort(sortBy('id'));
    }, [events.length]);

    return (
        <Draggable nodeRef={ref}>
            <Container
                className='SystemLogs-container'
                data-testid='SystemLogs-container'
                ref={ref}
            >
                <Logs items={eventsSorted} renderRow={renderEvent} />
            </Container>
        </Draggable>
    );
}

export default SystemLogs;
