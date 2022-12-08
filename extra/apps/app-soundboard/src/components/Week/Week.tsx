import React, { useCallback, useContext, useRef, useState } from 'react';
import { Wrapper, RowHeaderContainer } from './Week.style';
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
                hoverDate: hover ? date : undefined,
                hoverWeek: undefined,
            },
            100
        );
    }

    function hoverWeek(hover: boolean) {
        context.patchState(
            {
                hoverWeek: hover ? weekPointer.weekAndYear : undefined,
                hoverDate: undefined,
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

    function renderColumn(day: number) {
        const dateInfo = XDate.fromWeek(
            weekPointer.week,
            weekPointer.year,
            day
        ).toInfo();

        const dayData = (weekData as any)[`d${day}`] || defaultWeekData;

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

        if (!dateInfo) {
            return null;
        }

        return (
            <Square
                key={day}
                date={dateInfo.dateString}
                dayOfYear={dateInfo.dayOfYear ?? 0}
                hoursPerDay={perDay}
                updateMinutesForDay={updateMinutesForDay}
                title={dateInfo.dayOfWeekShortName}
                dayData={dayData}
                isCurrent={dateInfo.isToday ?? false}
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
        const firstDayData = (weekData as any)['d0'] || defaultWeekData;

        return (
            <RowHeader
                isCurrentWeek={isCurrentWeek ?? false}
                week={week}
                minutes={firstDayData.currentItem}
                updateMinutes={bulkUpdateWeekMinutes}
            />
        );
    }

    function renderRowSummary() {
        return (
            <SquareSummary
                weekTotal={(weekData as any).total ?? {}}
                projectsColors={context.projectsColors}
                onHover={hoverWeek}
                onClick={() => hoverWeek(true)}
            />
        );
    }

    return (
        <Wrapper className='Week-wrapper' data-testid='Week-wrapper'>
            {renderRowHeader()}
            {renderColumns()}
            {renderRowSummary()}
        </Wrapper>
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
    const ref = useRef<HTMLDivElement>(null);

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
