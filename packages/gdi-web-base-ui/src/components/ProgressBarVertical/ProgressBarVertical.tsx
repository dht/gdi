import React from 'react';
import { Wrapper, Inner } from './ProgressBarVertical.style';
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
        <Wrapper
            className='ProgressBarVertical-wrapper'
            data-testid='ProgressBarVertical-wrapper'
        >
            <Inner className={className} style={style} />
        </Wrapper>
    );
}

export default ProgressBarVertical;
