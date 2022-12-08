import React, { useMemo } from 'react';
import {
    Column,
    Wrapper,
    ContainerStat,
    GraphWrapper,
    Title,
    Value,
} from './Stats.style';
import { Graph } from '../Graph/Graph';
import { useLanguage } from '@gdi/language';

export type StatsProps = {
    stats: IStats;
    callbacks: {
        onClick: (stat: IStat, withShift?: boolean) => void;
        onNavigate: (stat: IStat) => void;
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
        <Wrapper className='Stats-wrapper' data-testid='Stats-wrapper'>
            {renderStats()}
        </Wrapper>
    );
}

type StatProps = {
    stat: IStat;
    onNavigate: (stat: IStat) => void;
    onClick: (stat: IStat, withShift?: boolean) => void;
};

export function Stat(props: StatProps) {
    const { stat } = props;
    const { title, value, suffix = '', unit, clickEffect } = stat;
    const { t, m, tn, n } = useLanguage();

    const parsedValue = useMemo(() => {
        let output: number | string = value;

        if (unit === 'currency') {
            output = m.rounded(value);
        } else if (suffix) {
            output = tn(suffix, value);
        } else {
            output = n.rounded(value);
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
            className='Stat-wrapper'
            data-testid='Stat-wrapper'
            onClick={() => props.onNavigate(stat)}
            title={tip}
        >
            <Column>
                <Title>{t(title)}</Title>
                {renderValue()}
            </Column>
            <Column>
                <GraphWrapper>
                    <Graph journey={stat.journey as any} />
                </GraphWrapper>
            </Column>
        </ContainerStat>
    );
}
export default Stats;
