import React from 'react';
import { pointsWithSource, TimelinePoint } from './Timeline.points';
import { useMeasure } from 'react-use';
import {
    Wrapper,
    Line,
    Expander,
    Polygon,
    Scroll,
    Svg,
    Text,
} from './Timeline.style';

export type TimelineProps = {};

export function Timeline(_props: TimelineProps) {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    const w = Math.round(width);
    const h = Math.round(height) - 10;
    const mw = Math.round(w / 2);
    const mh = Math.round(h / 2);

    const linePoints = `0,${mh - 2} ${w},${mh - 2} ${w},${mh + 2} 0,${mh + 2}`;

    function renderPoint(point: TimelinePoint) {
        const { sx, x, y } = point;

        const poly = new Poly(mw, mh);

        poly.add(sx + 0.4, 0);
        poly.add(sx + 0.4, y);
        poly.add(x, y);
        poly.add(x, 0);

        const textPosition = poly.text();

        return (
            <React.Fragment key={point.id}>
                <Polygon
                    key={point.id}
                    className='point'
                    points={poly.build()}
                    negative={y < 0}
                />
                <Text x={textPosition.x} y={textPosition.y}>
                    {point.title}
                </Text>
            </React.Fragment>
        );
    }

    function renderPoints() {
        return pointsWithSource.map((point: TimelinePoint) =>
            renderPoint(point)
        );
    }

    return (
        <Wrapper
            className='Timeline-wrapper'
            data-testid='Timeline-wrapper'
            ref={ref}
        >
            <Svg width={Math.max(w, 0)} height={Math.max(h, 0)}>
                <defs>
                    <linearGradient id='positive' x2='0' y2='1'>
                        <stop offset='0' stopColor='#00aa55' />
                        <stop offset='1' stopColor='#00cc33' />
                    </linearGradient>
                    <linearGradient id='positiveHover' x2='0' y2='1'>
                        <stop offset='0' stopColor='#00aa55' />
                        <stop offset='1' stopColor='gold' />
                    </linearGradient>
                    <linearGradient id='negative' x2='0' y2='1'>
                        <stop offset='0' stopColor='#752a2a' />
                        <stop offset='1' stopColor='#a52a2a' />
                    </linearGradient>
                    <linearGradient id='negativeHover' x2='0' y2='1'>
                        <stop offset='0' stopColor='pink' />
                        <stop offset='1' stopColor='#a52a2a' />
                    </linearGradient>
                </defs>
                {renderPoints()}
                <Line points={linePoints} />
            </Svg>

            <Scroll>
                <Expander />
            </Scroll>
        </Wrapper>
    );
}

class Poly {
    private pairs: [number, number][] = [];

    constructor(private mw: number, private mh: number) {}

    add(x: number, y: number) {
        this.pairs.push([x, y]);
    }

    normalize() {
        return this.pairs.map((pair) => {
            const [x, y] = pair;
            return [x * 10, this.mh - y * 5];
        });
    }

    build() {
        const normalizedPairs = this.normalize();
        return normalizedPairs.map((pair) => pair.join(',')).join(' ');
    }

    info() {
        let info = {
            minX: 9999,
            maxX: 0,
            minY: 9999,
            maxY: 0,
            isNegative: false,
        };

        this.normalize().forEach((pair) => {
            const [x, y] = pair;
            info.minX = Math.min(info.minX, x);
            info.maxX = Math.max(info.maxX, x);
            info.minY = Math.min(info.minY, y);
            info.maxY = Math.max(info.maxY, y);
        });

        info.isNegative = info.maxY > this.mh;

        return info;
    }

    text() {
        const info = this.info();

        const x = (info.minX + info.maxX - 60) / 2;
        const y = info.isNegative ? info.maxY + 20 : info.minY - 10;

        return {
            x,
            y,
        };
    }
}

export default Timeline;
