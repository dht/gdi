import React from 'react';
import { Container, Item, Time, Title } from './Schedule.style';
import { isBefore, isAfter } from '@gdi/language';

export type ScheduleProps = {
    items: IScheduleSession[];
};

type IScheduleSession = {
    time: string;
    title: string;
};

export function Schedule(props: ScheduleProps) {
    const { items = [] } = props;

    const currentItem = findCurrentItem(items);

    function renderItem(item: IScheduleSession) {
        const { title = '', time } = item;
        const highlighted = time === currentItem.time;

        const alt = (title ?? '').length > 15 ? title : '';

        return (
            <Item highlighted={highlighted} key={item.time} className='item'>
                <Time>{time}</Time>
                <Title title={alt}>{title}</Title>
            </Item>
        );
    }

    function renderItems() {
        return items.map((item: IScheduleSession) => renderItem(item));
    }
    return (
        <Container
            className='Schedule-container'
            data-testid='Schedule-container'
        >
            {renderItems()}
        </Container>
    );
}

const currentTime = '11:46';

function dateFromTime(time: string) {
    const parts = time.split(':').map((i) => parseInt(i));
    const date = new Date();
    date.setHours(parts[0]);
    date.setMinutes(parts[1]);
    return date;
}

function findCurrentItem(items: IScheduleSession[]) {
    let output: IScheduleSession = { time: '', title: '' };

    const dateCurrent = dateFromTime(currentTime);

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const dateItem = dateFromTime(item.time);

        const nextItem = items[i + 1] || { time: '23:59' };
        const dateNextItem = dateFromTime(nextItem.time);

        if (
            isBefore(dateItem, dateCurrent) &&
            isAfter(dateNextItem, dateCurrent)
        ) {
            output = item;
        }
    }

    return output;
}

export default Schedule;
