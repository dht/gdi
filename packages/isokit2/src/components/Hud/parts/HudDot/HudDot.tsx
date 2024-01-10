import React from 'react';
import { Wrapper } from './HudDot.style';

export type HudDotProps = {
    x: number;
    y: number;
    clipPathId: string;
    color?: string;
};

export function HudDot(props: HudDotProps) {
    const { clipPathId, x, y } = props;

    return (
        <Wrapper>
            <ellipse
                cx={x}
                cy={y}
                rx='7'
                ry='7'
                fill='#00ff15'
                filter='url(#blur)'
                clipPath={`url(#${clipPathId})`}
            />
            <ellipse
                cx={x}
                cy={y}
                rx='5'
                ry='5'
                fill='white'
                clipPath={`url(#${clipPathId})`}
            />
        </Wrapper>
    );
}

export default HudDot;
