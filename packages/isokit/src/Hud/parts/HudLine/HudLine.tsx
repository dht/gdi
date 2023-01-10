import React, { useMemo } from 'react';
import { Wrapper } from './HudLine.style';

export type HudLineProps = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    clipPathId: string;
    color?: string;
};

export function HudLine(props: HudLineProps) {
    const { x1, y1, x2, y2, clipPathId, color = '#00ff15' } = props;

    const d = useMemo(() => {
        return `M${x2} ${y2} L${x1} ${y2} L${x1} ${y1}`;
    }, []);

    return (
        <Wrapper className='HudLine-wrapper' data-testid='HudLine-wrapper'>
            <path
                d={d}
                fill='none'
                stroke={color}
                strokeWidth={5}
                strokeDasharray='12 5'
                className='animate'
                filter='url(#blur)'
                clipPath={`url(#${clipPathId})`}
            />
            <path
                d={d}
                fill='none'
                stroke='#fff'
                strokeWidth={3}
                strokeDasharray='12 5'
                className='animate'
                clipPath={`url(#${clipPathId})`}
            />
        </Wrapper>
    );
}

export default HudLine;
