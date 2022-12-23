import { ProgressBar } from '@gdi/web-ui';
import React from 'react';
import {
    Wrapper,
    Parameter,
    ParameterName,
    Icon,
    Value,
    Visual,
    BottomLine,
} from './Sims.style';

export type SimsProps = {
    stats: IStats;
    callbacks: {
        onClick: (stat: IStat, withShift?: boolean) => void;
        onNavigate: (stat: IStat) => void;
    };
    isLoading: boolean;
};

const smallNumber = (number: number) => {
    if (number < 1000) {
        return number;
    }

    return Math.floor(number / 1000) + 'K';
};

export function Sims(props: SimsProps) {
    const { stats, callbacks } = props;

    function renderStat(stat: IStat, bottomLine: boolean) {
        const { iconName, color, title, value, goal = 1 } = stat;

        return (
            <Parameter key={stat.id}>
                {bottomLine ? (
                    <BottomLine onClick={() => callbacks.onClick(stat)}>
                        <Icon>
                            <i className='material-icons'>{iconName}</i>
                        </Icon>
                        <Value title={`${value} / ${goal}`}>
                            {smallNumber(value)}
                        </Value>
                    </BottomLine>
                ) : (
                    <Visual>
                        <ParameterName>{title}</ParameterName>
                        <ProgressBar
                            value={value / goal}
                            color={color}
                            barColor='#e8e8e8'
                            animated={false}
                        />
                    </Visual>
                )}
            </Parameter>
        );
    }

    function renderStats(bottomLine: boolean) {
        return Object.values(stats).map((stat) => renderStat(stat, bottomLine));
    }

    return (
        <Wrapper className='Sims-wrapper ' data-testid='Sims-wrapper'>
            {renderStats(true)}
            <br />
            {renderStats(false)}
        </Wrapper>
    );
}

export default Sims;
