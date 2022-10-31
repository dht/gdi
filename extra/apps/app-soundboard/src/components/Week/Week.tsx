import React, { useCallback, useContext, useRef, useState } from 'react';
import { Container, RowHeaderContainer } from './Week.style';
import Square from '../Square/Square';
import { soundboardContext } from '../../context/SoundboardContext';
import SquareSummary from '../SquareSummary/SquareSummary';
import { useNumpadTiming } from '../../hooks/useNumpadTiming';
import { XDate } from '@gdi/language';

export type WeekProps = {
    weekPointer: WeekPointer;
    weekData: WeekData;
};

const defaultWeekData = {
    currentItem: 0,
    otherItems: 0,
    currentItemTitles: {},
    otherItemsTitles: {},
};

export function Week(props: WeekProps) {
    const { weekPointer, weekData = {} } = props;
    const { week, isCurrentWeek } = weekPointer;

    const context = useContext(soundboardContext);
    const { perDay } = context.hoursPerPeriod;

    function hoverDay(date: string, hover: boolean) {
        context.patchState(
            {
                hoverDate: hover ? date : null,
                hoverWeek: null,
            },
            100
        );
    }

    function hoverWeek(hover: boolean) {
        context.patchState(
            {
                hoverWeek: hover ? weekPointer.weekAndYear : null,
                hoverDate: null,
            },
            100
        );
    }

    const bulkUpdateWeekMinutes = useCallback(
        (minutes: number) => {
            context.updateMinutesForWeek({
                minutes,
                weekPointer,
            });
        },
        [weekPointer]
    );

    function renderColumn(day: any) {
        const dateInfo = XDate.fromWeek(
            weekPointer.week,
            weekPointer.year,
            day
        ).toInfo();

        const dayData = weekData[`d${day}`] || defaultWeekData;

        const updateMinutesForDay = useCallback(
            (newValue: number) => {
                context.updateMinutesForDay({
                    minutes: newValue,
                    weekPointer,
                    day,
                });
            },
            [weekPointer]
        );

        return (
            <Square
                key={day}
                date={dateInfo.dateString}
                dayOfYear={dateInfo.dayOfYear}
                hoursPerDay={perDay}
                updateMinutesForDay={updateMinutesForDay}
                title={dateInfo.dayOfWeekShortName}
                dayData={dayData}
                isCurrent={dateInfo.isToday}
                onBucketHover={(hover: boolean) =>
                    hoverDay(dateInfo.dateString, hover)
                }
            />
        );
    }

    function renderColumns() {
        let output = [];

        for (let day = 0; day <= 6; day++) {
            output.push(renderColumn(day));
        }

        return output;
    }

    function renderRowHeader() {
        const firstDayData = weekData['d0'] || defaultWeekData;

        return (
            <RowHeader
                isCurrentWeek={isCurrentWeek}
                week={week}
                minutes={firstDayData.currentItem}
                updateMinutes={bulkUpdateWeekMinutes}
            />
        );
    }

    function renderRowSummary() {
        return (
            <SquareSummary
                weekTotal={weekData?.total ?? {}}
                projectsColors={context.projectsColors}
                onHover={hoverWeek}
                onClick={() => hoverWeek(true)}
            />
        );
    }

    return (
        <Container className='Week-container' data-testid='Week-container'>
            {renderRowHeader()}
            {renderColumns()}
            {renderRowSummary()}
        </Container>
    );
}

type RowHeaderProps = {
    isCurrentWeek: boolean;
    week: number;
    minutes: number;
    updateMinutes: (minutes: number) => void;
};

function RowHeader(props: RowHeaderProps) {
    const { isCurrentWeek, week, minutes } = props;
    const ref = useRef<HTMLDivElement>();

    useNumpadTiming(
        ref,
        minutes,
        (newValue: number) => {
            props.updateMinutes(newValue);
        },
        [minutes]
    );

    return (
        <RowHeaderContainer ref={ref} selected={isCurrentWeek}>
            W{week}
        </RowHeaderContainer>
    );
}

export default Week;
