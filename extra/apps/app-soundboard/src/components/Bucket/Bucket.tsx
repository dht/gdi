import React, { useRef } from 'react';
import { useNumpadTiming } from '../../hooks/useNumpadTiming';
import Duration from '../Duration/Duration';
import Percent from '../Percent/Percent';
import {
    Wrapper,
    Inner,
    First,
    Second,
    Third,
    PercentWrapper,
    DurationWrapper,
} from './Bucket.style';

export type BucketProps = {
    percent: number;
    percent2: number;
    minutes: number;
    multiplier?: number;
    otherTitles?: string;
    percentLine?: number;
    updateMinutes: (newValue: number) => void;
    onHover: (hover: boolean) => void;
    onClick: () => void;
};

export function Bucket(props: BucketProps) {
    const {
        percent,
        percent2,
        minutes,
        multiplier = 0,
        percentLine = 0,
        otherTitles,
    } = props;
    const ref = useRef<HTMLDivElement>();

    useNumpadTiming(
        ref,
        minutes,
        (newValue: number) => {
            props.updateMinutes(newValue);
        },
        [minutes]
    );

    const height = percent * 70;

    const style = {
        height: `${height}px`,
    };

    const height2 = percent2 * 70;

    const style2 = {
        height: `${height2}px`,
    };

    const height3 = percentLine * 70;

    const style3 = {
        display: !percentLine ? 'none' : 'block',
        height: `${height3}px`,
    };

    function renderDuration() {
        if (!minutes) {
            return null;
        }

        return <Duration minutes={minutes} className='center' />;
    }

    return (
        <Wrapper
            ref={ref}
            className='Bucket-wrapper'
            data-testid='Bucket-wrapper'
            // onMouseEnter={() => props.onHover(true)}
            onMouseLeave={() => props.onHover(false)}
            onClick={() => props.onClick()}
        >
            <Inner>
                <First title={otherTitles} style={style2}></First>
                <Second style={style}></Second>
                <Third style={style3}></Third>
            </Inner>
            <PercentWrapper>
                <Percent value={multiplier} />
            </PercentWrapper>
            <DurationWrapper>{renderDuration()}</DurationWrapper>
        </Wrapper>
    );
}

export default Bucket;
