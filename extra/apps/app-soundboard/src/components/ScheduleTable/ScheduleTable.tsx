import React from 'react';
import { allColors } from './ScheduleTable.colors';
import { ScheduleDay } from '../ScheduleDay/ScheduleDay';
import {
    Container,
    Table,
    HeaderContainer,
    Hour,
    Placeholder,
    HourTitle,
    Break,
    Empty,
    Column,
    Row,
} from './ScheduleTable.style';
import { useKey, useMeasure } from 'react-use';
import { useTheme } from 'styled-components';

export type ScheduleTableProps = {
    isDayTime: boolean;
    scheduleBlocks: IScheduleBlocks;
    scheduleSessions: GroupedScheduleSessions;
    currentDayAndTime: DayAndTime;
    onClick: (day: number, hour: string) => void;
    onClear: () => void;
    onMove: (key: string) => void;
};

export function ScheduleTable(props: ScheduleTableProps) {
    const { isDayTime, scheduleBlocks, scheduleSessions, currentDayAndTime } =
        props;

    const [ref, { width }] = useMeasure<HTMLDivElement>();

    const colors = isDayTime ? allColors.day : allColors.evening;

    useArrowsWithAlt(props.onMove);

    useKey('Delete', (ev) => {
        if (!ev.altKey) {
            return;
        }
        props.onClear();
    });

    useKey('Backspace', (ev) => {
        if (!ev.altKey) {
            return;
        }
        props.onClear();
    });

    function renderDay(day: number, color: string, index: number) {
        const dayItems = scheduleSessions[String(day)];

        return (
            <ScheduleDay
                key={day || index}
                color={color}
                day={day}
                titleColor={colors.dayTitle}
                scheduleBlocks={scheduleBlocks}
                data={dayItems}
                currentDayAndTime={currentDayAndTime}
                onClick={props.onClick}
            />
        );
    }

    function renderDays() {
        return [0, 1, 2, 3, 4, 5, 6].map((day: number, index: number) =>
            renderDay(day, colors.columns[index], index)
        );
    }

    function renderEmpty() {
        if (scheduleBlocks.length > 0) {
            return;
        }

        const style = {
            height: `624px`,
        };

        return (
            <Row>
                <Empty style={style}>Loading...</Empty>
            </Row>
        );
    }

    return (
        <Container
            className='ScheduleTable-container'
            data-testid='ScheduleTable-container'
            isDayTime={isDayTime}
        >
            <Table ref={ref}>
                <ScheduleTableHours
                    scheduleBlocks={scheduleBlocks}
                    color={colors.hours}
                    breakColor={colors.break}
                    tableWidth={width}
                />
                <Column>
                    <Row>{renderDays()}</Row>
                    {renderEmpty()}
                </Column>
                {isDayTime && <Placeholder />}
            </Table>
        </Container>
    );
}

function ScheduleTableHours({
    color,
    breakColor,
    scheduleBlocks,
    tableWidth,
}: any) {
    function renderHour(scheduleBlock: IScheduleBlock, index: number) {
        const { key, startTime, isFullWidth, title } = scheduleBlock;

        const breakStyle = {
            width: tableWidth - 262 + 'px',
        };

        return (
            <Hour key={key || index} className='hour'>
                <HourTitle>{startTime}</HourTitle>
                {isFullWidth && (
                    <Break style={breakStyle} color={breakColor}>
                        {title}
                    </Break>
                )}
            </Hour>
        );
    }

    function renderHours() {
        return scheduleBlocks.map((hour: any, index: number) =>
            renderHour(hour, index)
        );
    }
    return (
        <HeaderContainer width={140} color={color}>
            {renderHours()}
        </HeaderContainer>
    );
}

export default ScheduleTable;

function useArrowsWithAlt(callback: (key: string) => void) {
    const { isRtl } = useTheme();

    useKey('ArrowUp', (ev) => {
        if (!ev.altKey) {
            return;
        }
        callback('up');
    });

    useKey('ArrowRight', (ev) => {
        if (!ev.altKey) {
            return;
        }
        callback(isRtl ? 'left' : 'right');
    });

    useKey('ArrowDown', (ev) => {
        if (!ev.altKey) {
            return;
        }
        callback('down');
    });

    useKey('ArrowLeft', (ev) => {
        if (!ev.altKey) {
            return;
        }
        callback(isRtl ? 'right' : 'left');
    });
}
