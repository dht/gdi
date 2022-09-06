import React, { useMemo } from 'react';
import {
    Container,
    Dot,
    Knob,
    Dial,
    DialLine,
    DotWrapper,
    Title,
    Value,
    Details,
} from './Gauge.style';

export type GaugeProps = {
    title: string;
    percent: number;
    value?: number;
    flavour?: 'duration';
};

export function Gauge(props: GaugeProps) {
    const { title, percent, value, flavour } = props;

    const valueText = useMemo(() => {
        switch (flavour) {
            case 'duration':
                return minutesToDuration(value);
            default:
                return '';
        }
    }, [value]);

    function renderDial(dial: number) {
        return (
            <Dial key={dial} className='dial'>
                <DialLine />
            </Dial>
        );
    }

    function renderDials() {
        let output = [];

        for (let i = 0; i < 12; i++) {
            output.push(renderDial(i));
        }

        return output;
    }

    function renderDot() {
        const style = {
            transform: `rotate(${percent * 2.33 - 120}deg)`,
        };

        return (
            <DotWrapper style={style}>
                <Dot className='dot' />
            </DotWrapper>
        );
    }

    return (
        <Container className='Gauge-container' data-testid='Gauge-container'>
            <Knob>
                {renderDials()}
                {renderDot()}
            </Knob>
            <Details>
                <Title>{title}</Title>
                <Value>{valueText}</Value>
            </Details>
        </Container>
    );
}

function minutesToDuration(value?: number) {
    if (!value) {
        return '';
    }

    if (value < 60) {
        return `${value}m`;
    } else {
        const hours = Math.floor(value / 60);
        const minutes = value % 60;

        return `${hours}h${minutes}m`;
    }
}

export default Gauge;
