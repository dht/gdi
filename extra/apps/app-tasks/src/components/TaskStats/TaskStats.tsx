import React from 'react';
import Field from '../Field/Field';
import { Wrapper, Flex } from './TaskStats.style';
import { duration as toDurationText } from '@gdi/language';

export type TaskStatsProps = {
    stats: ISessionStats;
};

export function TaskStats(props: TaskStatsProps) {
    const { stats } = props;

    const estimation = toDurationText(stats.estimation) || '-';
    const totalTime = toDurationText(stats.progressWithSession) || '-';
    const timeLeft = toDurationText(stats.timeLeft) || '-';

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
