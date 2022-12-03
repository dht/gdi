import React from 'react';
import Field from '../Field/Field';
import { Wrapper, Flex } from './TaskStats.style';
import { toDuration } from '@gdi/language';

export type TaskStatsProps = {
    stats: ISessionStats;
};

export function TaskStats(props: TaskStatsProps) {
    const { stats } = props;

    const estimation = toDuration(stats.estimation) || '-';
    const totalTime = toDuration(stats.progressWithSession) || '-';
    const timeLeft = toDuration(stats.timeLeft) || '-';

    return (
        <Wrapper className='TaskStats-wrapper' data-testid='TaskStats-wrapper'>
            <Field title='estimation:' value={estimation} />
            <Field title='total time:' value={totalTime} />
            <Flex />
            <Field title='time left:' value={timeLeft} />
        </Wrapper>
    );
}

export default TaskStats;
