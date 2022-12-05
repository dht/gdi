import React from 'react';
import { Wrapper, Inner } from './ProgressBar.style';
import classnames from 'classnames';

export type ProgressBarProps = {
    value: number;
    color?: string;
    barColor?: string;
    width?: number;
    animated?: boolean;
};

export function ProgressBar(props: ProgressBarProps) {
    let { value = 0, color, animated = true, barColor } = props;
    const width = 100 * value + '%';

    let backgroundColor = color;

    if (!backgroundColor) {
        if (value < 0.85) {
            backgroundColor = 'palevioletred';
        } else if (value < 1.05) {
            backgroundColor = 'orange';
        } else {
            backgroundColor = 'red';
        }
    }
    const styleContainer: any = {};

    if (props.width) {
        styleContainer.width = `${props.width}px`;
    }

    const styleInner = {
        width,
        backgroundColor,
    };

    const className = classnames({
        animated,
    });

    return (
        <Wrapper
            className='ProgressBar-wrapper'
            data-testid='ProgressBar-wrapper'
            style={styleContainer}
            barColor={barColor}
        >
            <Inner className={className} style={styleInner} />
        </Wrapper>
    );
}

export default ProgressBar;
