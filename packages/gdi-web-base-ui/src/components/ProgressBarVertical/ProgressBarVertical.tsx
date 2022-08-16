import React from 'react';
import { Container, Inner } from './ProgressBarVertical.style';
import classnames from 'classnames';

export type ProgressBarVerticalProps = {
    value: number;
    color: string;
    animated: boolean;
};

export function ProgressBarVertical(props: ProgressBarVerticalProps) {
    let { value = 0, color = 'orange', animated } = props;
    const height = (400 * value) / 100 + 'px';

    const style = {
        height,
        backgroundColor: color,
    };

    const className = classnames({
        animated,
    });

    return (
        <Container
            className='ProgressBarVertical-container'
            data-testid='ProgressBarVertical-container'
        >
            <Inner className={className} style={style} />
        </Container>
    );
}

export default ProgressBarVertical;
