import React from 'react';
import Field from '../Field/Field';
import { Container, Flex } from './TaskStats.style';
import { formatDuration } from '@gdi/language';

export type TaskStatsProps = {
    stats: ISessionStats;
};

export function TaskStats(props: TaskStatsProps) {
    const { stats } = props;

    const estimation = formatDuration(stats.estimation) || '-';
    const totalTime = formatDuration(stats.progressWithSession) || '-';
    const timeLeft = formatDuration(stats.timeLeft) || '-';

    return (
        <Container
            className='TaskStats-container'
            data-testid='TaskStats-container'
        >
            <Field title='estimation:' value={estimation} />
            <Field title='total time:' value={totalTime} />
            <Flex />
            <Field title='time left:' value={timeLeft} />
        </Container>
    );
}

export default TaskStats;
