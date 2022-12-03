import React, { useMemo } from 'react';
import { Bar, BarInner, Wrapper } from './Graph.style';
import { sortBy } from 'shared-base';

export type GraphProps = {
    journey: IStatJourney[];
};

export function Graph(props: GraphProps) {
    const { journey } = props;

    const journeyWithPercent = useMemo(() => {
        const max = Math.max(...journey.map((j) => j.value));

        return journey.sort(sortBy('date')).map((j) => ({
            ...j,
            percent: 100 * (j.value / max),
        }));
    }, [journey]);

    function renderDataPoint(index: number) {
        const dataPoint = journeyWithPercent[index] ?? {};
        const { percent = 1, value = '' } = dataPoint;

        const style = {
            height: `${percent}%`,
        };

        return (
            <Bar key={index} className='dataPoint' title={String(value)}>
                <BarInner style={style} />
            </Bar>
        );
    }

    function renderDataPoints() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index: number) =>
            renderDataPoint(index)
        );
    }

    return (
        <Wrapper className='Graph-wrapper' data-testid='Graph-wrapper'>
            {renderDataPoints()}
        </Wrapper>
    );
}

export default Graph;
