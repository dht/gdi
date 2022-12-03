import React from 'react';
import { Wrapper, DayHeaderContainer, Squares } from './ScheduleDay.style';
import { XDate } from '@gdi/language';
import ScheduleSquare from '../ScheduleSquare/ScheduleSquare';

export type ScheduleDayProps = {
    day: number;
    color: string;
    titleColor: string;
    scheduleBlocks: IScheduleBlocks;
    data: Record<
        string,
        {
            scheduleSession: IScheduleSession;
            ticket: ITicket;
            project: IProject;
        }
    >;
    currentDayAndTime: DayAndTime;
    onClick: (day: number, startTime: string) => void;
};

export function ScheduleDay(props: ScheduleDayProps) {
    const {
        color,
        day,
        titleColor,
        scheduleBlocks,
        data = {},
        currentDayAndTime,
    } = props;

    function onClick(startTime: string) {
        props.onClick(day, startTime);
    }

    function renderSquare(block: IScheduleBlock, index: number) {
        const { key } = block;

        const squareData = data[key];

        const isCurrent =
            block.startTime === currentDayAndTime.time &&
            day === currentDayAndTime.day;

        return (
            <ScheduleSquare
                key={key || index}
                scheduleSession={squareData?.scheduleSession}
                project={squareData?.project}
                ticket={squareData?.ticket}
                block={block}
                isCurrent={isCurrent}
                onClick={() => {
                    if (block.isFullWidth) {
                        return;
                    }
                    onClick(block.startTime);
                }}
            />
        );
    }

    function renderSquares() {
        return scheduleBlocks.map(
            (scheduleBlock: IScheduleBlock, index: number) =>
                renderSquare(scheduleBlock, index)
        );
    }

    return (
        <Wrapper
            className='ScheduleDay-wrapper'
            data-testid='ScheduleDay-wrapper'
        >
            <DayHeader color={titleColor || color} day={day} />
            <Squares color={color}>{renderSquares()}</Squares>
        </Wrapper>
    );
}

function DayHeader({ color, day }: any) {
    const dayOfWeekName = new XDate().setDayOfWeek(day).toInfo()?.dayOfWeekName;

    return (
        <DayHeaderContainer color={color}>{dayOfWeekName}</DayHeaderContainer>
    );
}

export default ScheduleDay;
