import React from 'react';
import {
    Wrapper,
    DigitContainer,
    EdgeContainer,
    UnitContainer,
} from './Stopwatch.style';
import classnames from 'classnames';

export type StopwatchProps = {
    hours: number;
    minutes: number;
};

export function Stopwatch(props: StopwatchProps) {
    const { hours, minutes } = props;

    const digit1 = Math.floor(minutes / 10);
    const digit2 = minutes % 10;

    return (
        <Wrapper className='Stopwatch-wrapper' data-testid='Stopwatch-wrapper'>
            <Digit value={hours} />
            <Unit value='hour' />
            <Digit value={digit1} />
            <Digit value={digit2} />
            <Unit value='minute' />
        </Wrapper>
    );
}

type DigitProp = {
    value: number;
};

export function Digit(props: DigitProp) {
    const { value } = props;
    const digits: any = {
        0: [1, 0, 1, 1, 1, 1, 1],
        1: [0, 0, 0, 0, 1, 0, 1],
        2: [1, 1, 1, 0, 1, 1, 0],
        3: [1, 1, 1, 0, 1, 0, 1],
        4: [0, 1, 0, 1, 1, 0, 1],
        5: [1, 1, 1, 1, 0, 0, 1],
        6: [1, 1, 1, 1, 0, 1, 1],
        7: [1, 0, 0, 0, 1, 0, 1],
        8: [1, 1, 1, 1, 1, 1, 1],
        9: [1, 1, 1, 1, 1, 0, 1],
    };

    function renderEdges() {
        return digits[value].map((edge: number, index: number) => (
            <Edge key={index} on={edge === 1} />
        ));
    }

    return <DigitContainer>{renderEdges()}</DigitContainer>;
}

type EdgeProps = {
    on?: boolean;
};

export function Edge(props: EdgeProps) {
    const { on } = props;

    const className = classnames({ on });

    return <EdgeContainer className={className} />;
}

type UnitProps = {
    value: 'hour' | 'minute';
};

export function Unit(props: UnitProps) {
    const { value } = props;

    const text = value === 'hour' ? 'h' : 'm';

    return <UnitContainer>{text}</UnitContainer>;
}

export default Stopwatch;
