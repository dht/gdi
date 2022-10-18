import React, { useMemo } from 'react';
import {
    Column,
    Container,
    ContainerStat,
    GraphWrapper,
    Title,
    Value,
} from './Stats.style';
import { Graph } from '../Graph/Graph';

export type StatsProps = {
    stats: IStats;
    callbacks: {
        onClick: (stat: Stat, withShift?: boolean) => void;
        onNavigate: (stat: Stat) => void;
    };
};

export function Stats(props: StatsProps) {
    const { stats, callbacks } = props;

    function renderStat(stat: IStat) {
        return (
            <Stat
                key={stat.id}
                stat={stat}
                onNavigate={callbacks.onNavigate}
                onClick={callbacks.onClick}
            />
        );
    }

    function renderStats() {
        return Object.values(stats).map((stat: IStat) => renderStat(stat));
    }
    return (
        <Container className='Stats-container' data-testid='Stats-container'>
            {renderStats()}
        </Container>
    );
}

type StatProps = {
    stat: Stat;
    onNavigate: (stat: Stat) => void;
    onClick: (stat: Stat, withShift?: boolean) => void;
};

export function Stat(props: StatProps) {
    const { stat } = props;
    const { title, value, suffix = '', unit, clickEffect } = stat;

    const parsedValue = useMemo(() => {
        let output = value;

        if (unit === 'currency') {
            output = value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
            });
        }

        if (suffix) {
            output += ' ' + suffix;
        }

        return output;
    }, [stat]);

    const tip = clickEffect === 'nudge' ? 'Shift+click to nudge down' : '';

    function onClick(ev: React.MouseEvent) {
        ev.stopPropagation();
        props.onClick(stat, ev.shiftKey);
    }

    function renderValue() {
        return <Value onClick={onClick}>{parsedValue}</Value>;
    }

    return (
        <ContainerStat
            className='Stat-container'
            data-testid='Stat-container'
            onClick={() => props.onNavigate(stat)}
            title={tip}
        >
            <Column>
                <Title>{title}</Title>
                {renderValue()}
            </Column>
            <Column>
                <GraphWrapper>
                    <Graph journey={stat.journey} />
                </GraphWrapper>
            </Column>
        </ContainerStat>
    );
}
export default Stats;
