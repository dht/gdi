import React, { useMemo } from 'react';
import { Wrapper, Title, ChartWrapper } from './SquareSummary.style';
import { ChartDoughnut } from '@gdi/web-ui';

export type SquareSummaryProps = {
    weekTotal: WeekTotal;
    projectsColors: ProjectColors;
    onHover: (hover: boolean) => void;
    onClick: () => void;
};

export function SquareSummary(props: SquareSummaryProps) {
    const { weekTotal, projectsColors } = props;

    return (
        <Wrapper
            className='SquareSummary-wrapper'
            data-testid='SquareSummary-wrapper'
            onMouseEnter={() => props.onHover(true)}
            onMouseLeave={() => props.onHover(false)}
            onClick={props.onClick}
        >
            <Title>Week #1</Title>
            <ChartWrapper>
                <ChartDoughnut data={weekTotal} colors={projectsColors} />
            </ChartWrapper>
        </Wrapper>
    );
}

export default SquareSummary;
