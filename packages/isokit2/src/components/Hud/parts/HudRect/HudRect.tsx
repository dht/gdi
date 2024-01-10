import React, { useMemo } from 'react';
import { ClockAngle } from '../../Hud.types';
import HudDot from '../HudDot/HudDot';
import HudLine from '../HudLine/HudLine';
import { Clip, Wrapper } from './HudRect.style';

export type HudRectProps = {
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    width: number;
    height: number;
    clockAngle: ClockAngle;
};

export function HudRect(props: HudRectProps) {
    let { id, x1, y1, x2, y2, width, height, clockAngle } = props;

    const clipPathId = useMemo(() => {
        return `reveal${id}`;
    }, []);

    const sx = Math.min(x1, x2);
    const sy = Math.min(y1, y2);
    let cx = 0,
        cy = 0,
        cox = 0,
        coy = 0;

    let className = '';

    switch (clockAngle) {
        case '2':
            className += 'rect-top-right';
            cy = height + 20;
            coy = height + 20;
            break;
        case '4':
            className += 'rect-bottom-right';
            cy = 0;
            break;
        case '8':
            className += 'rect-bottom-left';
            cx = width + 20;
            cox = width + 20;
            break;
        case '10':
            className += 'rect-top-left';
            cx = width + 20;
            cox = width + 20;
            cy = height + 20;
            coy = height + 20;
            break;
    }

    function renderClipRect() {
        return (
            <rect
                x={cx}
                y={cy}
                width={width + 16}
                height={height + 26}
                style={{ transformOrigin: `${cox}px ${coy}px` }}
                className={className}
                fill='black'
            />
        );
    }

    const dx = clockAngle === '2' || clockAngle === '4' ? 4 : 14;

    return (
        <Wrapper className='HudRect-wrapper' data-testid='HudRect-wrapper'>
            <HudDot x={x1 - sx + 10} y={y1 - sy + 10} clipPathId={clipPathId} />
            <HudLine
                x1={x1 - sx + 10}
                y1={y1 - sy + 10}
                x2={x2 - sx + 10}
                y2={y2 - sy + 10}
                clipPathId={clipPathId}
            />
            <HudDot x={x2 - sx + dx} y={y2 - sy + 10} clipPathId={clipPathId} />
            <defs>
                <Clip id={clipPathId}>{renderClipRect()}</Clip>
            </defs>
        </Wrapper>
    );
}

export default HudRect;
