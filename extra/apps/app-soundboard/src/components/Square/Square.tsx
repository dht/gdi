import React, { useCallback } from 'react';
import Bucket from '../Bucket/Bucket';
import { BucketWrapper, Wrapper, Date, Title } from './Square.style';
import classNames from 'classnames';

export type SquareProps = {
    date: string;
    dayOfYear: number;
    title: String;
    isCurrent: boolean;
    dayData: DayData;
    hoursPerDay: number;
    updateMinutesForDay: (newValue: number) => void;
    onBucketHover: (hover: boolean) => void;
};

export function Square(props: SquareProps) {
    const { title, dayData, date, isCurrent, dayOfYear, hoursPerDay } = props;
    const { currentItem = 0, otherItems = 0, otherItemsTitles = {} } = dayData;

    const percent = currentItem / (hoursPerDay * 60);
    const percent2 = otherItems / (hoursPerDay * 60);

    const className = classNames({
        current: isCurrent,
    });

    const titles = Object.keys(otherItemsTitles).join(', ');

    return (
        <Wrapper
            className='Square-wrapper'
            data-testid='Square-wrapper'
            title={date}
        >
            <Date className={className}>{title}</Date>
            <Title className={className}>{dayOfYear}</Title>
            <BucketWrapper>
                <Bucket
                    percent={percent}
                    percent2={percent2}
                    otherTitles={titles}
                    percentLine={0}
                    minutes={currentItem}
                    onHover={props.onBucketHover}
                    onClick={() => props.onBucketHover(true)}
                    updateMinutes={props.updateMinutesForDay}
                />
            </BucketWrapper>
        </Wrapper>
    );
}

export default Square;
