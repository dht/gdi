import React from 'react';
import { Container, Inner } from './ProgressBar.style';
import classnames from 'classnames';

export type ProgressBarProps = {
    value: number;
    color?: string;
    width?: number;
    animated: boolean;
};

export function ProgressBar(props: ProgressBarProps) {
    let { value = 0, color, animated } = props;
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
        <Container
            className='ProgressBar-container'
            data-testid='ProgressBar-container'
            style={styleContainer}
        >
            <Inner className={className} style={styleInner} />
        </Container>
    );
}

export default ProgressBar;
