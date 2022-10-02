import React from 'react';
import { Container } from './FullCalendar.style';

import '@fullcalendar/react/dist/vdom';
import FullCalendarUI, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { createEventId } from './event-utils';
import { useMeasure } from 'react-use';

export type FullCalendarProps = {};

export function FullCalendar(_props: FullCalendarProps) {
    function handleWeekendsToggle() {}

    function handleDateSelect(selectInfo: any) {
        let title = prompt('Please enter a new title for your event');
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    }

    function handleEventClick(clickInfo: any) {}

    function handleEvents(events: any) {}

    return (
        <Container
            className='FullCalendar-container'
            data-testid='FullCalendar-container'
        >
            <span>header</span>

            <FullCalendarUI
                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    googleCalendarPlugin,
                ]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                initialEvents={[]} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                eventAdd={function () {}}
                eventChange={function () {}}
                eventRemove={function () {}}
            />
        </Container>
    );
}

export default FullCalendar;

function renderEventContent(eventInfo: any) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}

function renderSidebarEvent(event: any) {
    return (
        <li key={event.id}>
            <b>
                {formatDate(event.start, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                })}
            </b>
            <i>{event.title}</i>
        </li>
    );
}
