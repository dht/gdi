import * as React from 'react';
import { useMemo } from 'react';
import { Wrapper } from './ChartDoughnut.style';

export type ChartDoughnutProps = {
    data: Record<string, number>;
    colors: Record<string, string>;
};

export function ChartDoughnut(props: ChartDoughnutProps) {
    const { data = {}, colors = {} } = props;

    function renderPaths() {
        const sum = Object.values(data).reduce(
            (output: number, minutes: number) => output + minutes,
            0
        );

        return Object.keys(data).reduce(
            (output: any, key: string, index: number) => {
                const value = (data as any)[key];

                if (value) {
                    const percent = value / sum;
                    const degrees = percent * 359;

                    const startAngle = output.startAngle;
                    const endAngle = output.startAngle + degrees;

                    output.components.push(
                        <path
                            id={key}
                            key={key}
                            fill={colors[key]}
                            d={computeChartArc(startAngle, endAngle, 90, 60)}
                        >
                            <title>{key}</title>
                        </path>
                    );

                    output.startAngle = endAngle;
                }

                return output;
            },
            {
                components: [],
                startAngle: 0,
            }
        ).components;
    }

    return (
        <Wrapper
            className='ChartDoughnut-wrapper'
            data-testid='ChartDoughnut-wrapper'
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                id='sv'
                width='80'
                height='80'
                viewBox='0 0 180 180'
            >
                <path
                    id='background'
                    key='background'
                    fill={'#112'}
                    d={computeChartArc(0, 359, 90, 60)}
                />
                {renderPaths()}
            </svg>
        </Wrapper>
    );
}

export function computeChartArc(
    startAngle: number,
    endAngle: number,
    outerRadius: number,
    innerRadius: number
) {
    startAngle = (startAngle * Math.PI) / 180;
    endAngle = (endAngle * Math.PI) / 180;
    const sinAlpha = Math.sin(startAngle);
    const cosAlpha = Math.cos(startAngle);
    const sinBeta = Math.sin(endAngle);
    const cosBeta = Math.cos(endAngle);
    const largeArc = endAngle - startAngle > Math.PI;

    const P = {
        x: outerRadius + outerRadius * sinAlpha,
        y: outerRadius - outerRadius * cosAlpha,
    };

    const Q = {
        x: outerRadius + outerRadius * sinBeta,
        y: outerRadius - outerRadius * cosBeta,
    };

    const R = {
        x: outerRadius + innerRadius * sinBeta,
        y: outerRadius - innerRadius * cosBeta,
    };

    const S = {
        x: outerRadius + innerRadius * sinAlpha,
        y: outerRadius - innerRadius * cosAlpha,
    };

    return `M${P.x}, ${P.y} A${outerRadius},${outerRadius} 0 ${
        largeArc ? '1' : '0'
    } 1 ${Q.x},${Q.y} L${R.x},${R.y} A${innerRadius},${innerRadius} 0 ${
        largeArc ? '1' : '0'
    } 0 ${S.x},${S.y} Z`;
}

export function getHexStringColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default ChartDoughnut;
