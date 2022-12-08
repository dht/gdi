import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { useBoolean, useDebounce } from 'react-use';
import {
    Wrapper,
    City,
    Divider,
    Hours,
    Inner,
    Minutes,
    Time,
    Radio,
    Clear,
} from './ScheduleClock.style';
import { calculateUTC } from '@gdi/language';

export type ScheduleClockProps = {
    changeDelta: (timeDeltaInMinutes: number) => void;
    delta: number;
};

export function ScheduleClock(props: ScheduleClockProps) {
    const ref = useRef<HTMLDivElement>(null);
    const interval = useRef<number>();
    const [timestamp, setTimestamp] = useState(ts());

    const delta = useMouseWheelValue(ref, props.delta);

    const utcData = useMemo(() => {
        return calculateUTC(delta);
    }, [delta]);

    useDebounce(
        () => {
            if (delta === props.delta) {
                return;
            }

            props.changeDelta(delta);
        },
        2000,
        [delta]
    );

    useEffect(() => {
        interval.current = setInterval(() => {}, 500);
        setTimestamp(ts() + 60 * 1000 * delta);

        return () => {
            clearInterval(interval.current);
        };
    }, [delta]);

    const hours = new Date(timestamp).getHours();
    const minutes = new Date(timestamp).getMinutes();

    const style = {
        backgroundImage: `url(${utcData.alternativeCity})`,
    };

    return (
        <Wrapper
            className='ScheduleClock-wrapper'
            data-testid='ScheduleClock-wrapper'
            ref={ref}
            style={style}
        >
            <Inner>
                <Time>
                    <Hours>{lz(hours)}</Hours>
                    <Divider>:</Divider>
                    <Minutes>{lz(minutes)}</Minutes>
                </Time>

                <City>
                    {utcData.alternativeCity} {utcData.alternativeUtc}
                </City>
            </Inner>
            <Radio target='_blank' href={utcData.alternativeCity} tabIndex={-1}>
                <i className='material-icons'>radio</i>
            </Radio>
            <Clear onClick={() => props.changeDelta(0)} tabIndex={-1}>
                <i className='material-icons'>autorenew</i>
            </Clear>
        </Wrapper>
    );
}

export default ScheduleClock;

const ts = () => new Date().getTime();

const lz = (str: string | number) =>
    String(str).length === 1 ? '0' + str : str;

function useMouseWheelValue(
    ref: RefObject<HTMLElement | undefined>,
    initialValue: number
) {
    const [currentValue, setCurrentValue] = useState(initialValue);
    const over = onMouseOver(ref);

    useEffect(() => {
        setCurrentValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        function onMouseWheel(ev: any) {
            const plus = ev.wheelDelta > 0;
            const newValue = currentValue + (plus ? 5 : -5);
            setCurrentValue(newValue);
        }

        if (!over) {
            document.removeEventListener('wheel', onMouseWheel);
            return;
        }

        document.addEventListener('wheel', onMouseWheel);

        return () => {
            document.removeEventListener('wheel', onMouseWheel);
        };
    }, [over, currentValue]);

    return currentValue;
}

function onMouseOver(ref: RefObject<HTMLElement | undefined>) {
    const [over, setOver] = useBoolean(false);

    useEffect(() => {
        const that = ref.current as any;

        function onMouseOver() {
            setOver(true);
        }

        function onMouseOut() {
            setOver(false);
        }

        that.addEventListener('mouseover', onMouseOver);
        that.addEventListener('mouseout', onMouseOut);

        return () => {
            that.removeEventListener('mouseover', onMouseOver);
            that.removeEventListener('mouseout', onMouseOut);
        };
    }, []);

    return over;
}
